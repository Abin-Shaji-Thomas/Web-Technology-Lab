# 🧪 Experiment 10 — Server-Side Application Using Node.js

> **Course:** Web Technology Lab  
> **Experiment No.:** 10  

---

## 📌 Objective

To develop a server-side web application using **Node.js** and **MongoDB** that serves a user registration form, validates incoming form inputs on the server, and persists registered user details to a MongoDB database.

---

## 🌐 Live Demo

🔗 **[Open Live User Registration Form](https://abin-shaji-thomas.github.io/Web-Technology-Lab/Experiment-10/home.html)**

---

## 📝 Exercises

| # | Exercise | Topic | File |
|---|----------|-------|------|
| 1 | User Registration Form | Form controls, input validation (Name, Password, Age, Mobile, Email, Gender, State, Skills), HTTP POST processing | [home.html](./home.html) |

---

## 🛠️ Server Architecture & Validation Rules

| Field | Type | Validation Rules |
|-------|------|------------------|
| `name` | Text | Required, 2 to 80 characters |
| `password` | Password | Required, minimum 8 characters |
| `age` | Number | Required, numeric between 1 and 120 |
| `mobile` | Tel | Required, exactly 10 numeric digits (`^[0-9]{10}$`) |
| `email` | Email | Required, valid email format |
| `gender` | Radio | Required, one of Male / Female / Other |
| `state` | Select | Required, state dropdown selection |
| `skills` | Checkbox | Required, at least one skill selected |

---

## 📁 Folder Structure

```
Experiment-10/
│
├── README.md                                                  ← This file
├── home.html                                                  ← User Registration Form UI
├── Ex-10.html                                                 ← Mirror of home.html
├── index.html                                                 ← Mirror of home.html
├── app.js                                                     ← Node.js HTTP server & MongoDB submission handler
├── package.json                                               ← Project dependencies & start script
└── Practicum No 10 SErver SIde Application Using NodeJS.pdf  ← Lab manual
```

---

## 🚀 How to Run Locally

1. **Navigate to the experiment directory:**
   ```bash
   cd Experiment-10
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start MongoDB service (if running locally):**
   ```bash
   sudo systemctl start mongod
   # or
   mongod --dbpath /data/db
   ```

4. **Launch the Node.js server:**
   ```bash
   npm start
   # or
   node app.js
   ```

5. **Open in browser:**
   ```
   http://localhost:5000/
   ```

---

## ➕ How to Add a New File

See the guide in [Experiment 1 README](../Experiment-1/README.md#-how-to-add-a-new-file) — same steps apply (just change `1` → `10` in filenames and commit messages).

---

## 🔗 Back to Main Lab

[← Return to Main README](../README.md)
