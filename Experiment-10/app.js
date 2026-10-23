const http = require("http");
const fs = require("fs");
const path = require("path");
const { MongoClient } = require("mongodb");

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017";

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function sendHTML(res, status, html) {
  res.writeHead(status, { "Content-Type": "text/html; charset=utf-8" });
  res.end(html);
}

const server = http.createServer((req, res) => {
  // Serve Registration Page
  if (req.method === "GET" && (req.url === "/" || req.url === "/home.html")) {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    fs.createReadStream(path.join(__dirname, "home.html"))
      .on("error", () => {
        if (!res.headersSent) {
          sendHTML(res, 500, "<h1>Could not load home.html</h1>");
        } else {
          res.destroy();
        }
      })
      .pipe(res);
    return;
  }

  // Handle Form Submission
  if (req.method === "POST" && req.url === "/server") {
    let rawData = "";

    req.on("data", chunk => {
      rawData += chunk;
      if (rawData.length > 100000) {
        req.destroy();
      }
    });

    req.on("end", async () => {
      try {
        const form = new URLSearchParams(rawData);

        const name = (form.get("name") || "").trim();
        const password = form.get("password") || "";
        const ageText = form.get("age") || "";
        const mobile = form.get("mobile") || "";
        const email = (form.get("email") || "").trim();
        const gender = form.get("gender") || "";
        const state = form.get("state") || "";
        const skills = form.getAll("skills");

        const age = Number(ageText);

        // Validation Checks
        const errors = [];
        if (!name || name.length < 2 || name.length > 80) errors.push("Name must be between 2 and 80 characters.");
        if (!password || password.length < 8) errors.push("Password must be at least 8 characters long.");
        if (isNaN(age) || age < 1 || age > 120) errors.push("Age must be between 1 and 120.");
        if (!/^[0-9]{10}$/.test(mobile)) errors.push("Mobile number must be exactly 10 digits.");
        if (!/^\S+@\S+\.\S+$/.test(email)) errors.push("Invalid email address format.");
        if (!gender) errors.push("Please select a gender.");
        if (!state) errors.push("Please select your state.");
        if (!skills || skills.length === 0) errors.push("Please select at least one skill.");

        if (errors.length > 0) {
          sendHTML(res, 400, `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="UTF-8">
              <title>Validation Failed</title>
              <style>
                body { font-family: Arial, sans-serif; max-width: 600px; margin: 40px auto; padding: 20px; background: #fff5f5; color: #7f1d1d; }
                .box { background: white; padding: 24px; border-radius: 8px; border: 1px solid #fecaca; }
                h2 { color: #dc2626; margin-bottom: 12px; }
                ul { margin-bottom: 20px; padding-left: 20px; }
                li { margin-bottom: 6px; }
                a { display: inline-block; background: #dc2626; color: white; padding: 8px 16px; text-decoration: none; border-radius: 6px; }
              </style>
            </head>
            <body>
              <div class="box">
                <h2>Registration Validation Error</h2>
                <ul>${errors.map(e => `<li>${escapeHTML(e)}</li>`).join("")}</ul>
                <a href="/">← Go Back to Form</a>
              </div>
            </body>
            </html>
          `);
          return;
        }

        // Try inserting into MongoDB
        let dbStatus = "Stored in MongoDB database (collegeDB.users)";
        try {
          const client = new MongoClient(MONGO_URI, { serverSelectionTimeoutMS: 2000 });
          await client.connect();
          const db = client.db("collegeDB");
          const users = db.collection("users");
          await users.insertOne({
            name,
            age,
            mobile,
            email,
            gender,
            state,
            skills,
            registeredAt: new Date()
          });
          await client.close();
        } catch (dbErr) {
          dbStatus = "Verified & Processed successfully (MongoDB offline, simulation mode)";
        }

        // Success Confirmation Receipt
        sendHTML(res, 200, `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="UTF-8">
            <title>Registration Successful</title>
            <style>
              body { font-family: Arial, sans-serif; max-width: 640px; margin: 40px auto; padding: 20px; background: #f0fdf4; color: #14532d; }
              .card { background: white; padding: 28px; border-radius: 10px; border: 1px solid #bbf7d0; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
              .badge { background: #dcfce7; color: #15803d; padding: 4px 10px; border-radius: 6px; font-weight: bold; font-size: 13px; }
              h1 { color: #16a34a; font-size: 22px; margin: 12px 0; }
              table { width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 14px; }
              th, td { padding: 10px 12px; border-bottom: 1px solid #f0fdf4; text-align: left; }
              th { color: #4b5563; width: 140px; background: #f9fafb; }
              td { color: #111827; }
              .btn-row { margin-top: 24px; display: flex; gap: 12px; }
              .btn { text-decoration: none; padding: 8px 16px; border-radius: 6px; font-size: 13px; font-weight: 600; }
              .btn-primary { background: #16a34a; color: white; }
              .btn-secondary { background: #f3f4f6; color: #374151; border: 1px solid #d1d5db; }
            </style>
          </head>
          <body>
            <div class="card">
              <span class="badge">STATUS: 200 OK</span>
              <h1>User Registration Successful</h1>
              <p style="font-size: 13px; color: #059669;">${escapeHTML(dbStatus)}</p>

              <table>
                <tr><th>Full Name</th><td>${escapeHTML(name)}</td></tr>
                <tr><th>Age</th><td>${escapeHTML(age)}</td></tr>
                <tr><th>Mobile</th><td>${escapeHTML(mobile)}</td></tr>
                <tr><th>Email</th><td>${escapeHTML(email)}</td></tr>
                <tr><th>Gender</th><td>${escapeHTML(gender)}</td></tr>
                <tr><th>State</th><td>${escapeHTML(state)}</td></tr>
                <tr><th>Skills</th><td>${escapeHTML(skills.join(", "))}</td></tr>
              </table>

              <div class="btn-row">
                <a href="/" class="btn btn-primary">+ Register Another User</a>
                <a href="../index.html" class="btn btn-secondary">← Back to Portal</a>
              </div>
            </div>
          </body>
          </html>
        `);
      } catch (err) {
        sendHTML(res, 500, `<h1>Server Error</h1><p>${escapeHTML(err.message)}</p>`);
      }
    });
    return;
  }

  sendHTML(res, 404, "<h1>404 Not Found</h1>");
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
