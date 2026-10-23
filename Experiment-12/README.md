# 🧪 Experiment 12 — Full Stack Web Application Development using NodeJS, ReactJS and MongoDB

> **Course:** Web Technology Lab  
> **Experiment No.:** 12  

---

## 📌 Objective

To design and develop a full stack web application implementing a three-tier architecture — using **ReactJS** for the frontend user interface, **NodeJS with ExpressJS** for the backend REST API, and **MongoDB** for persistent document storage, and to perform end-to-end Create, Read, Update, and Delete (CRUD) operations.

---

## 🌐 Live Demo

🔗 **[Open Live Full Stack Student App](https://abin-shaji-thomas.github.io/Web-Technology-Lab/Experiment-12/Ex-12.html)**

---

## 📝 Exercises

| # | Exercise | Topic | File |
|---|----------|-------|------|
| 1 | Full Stack Student Management System | 3-tier architecture, ReactJS components (`useState`, `useEffect`), Express.js REST API, MongoDB Mongoose CRUD | [Ex-12.html](./Ex-12.html) |

---

## 🏗️ 3-Tier Architecture

```
User (Browser)
      ↓
[ReactJS Frontend (Vite)] ──(Axios / HTTP)──> [NodeJS + ExpressJS REST API]
                                                         ↓ (Mongoose ODM)
                                              [MongoDB Database (studentdb)]
```

---

## 🛠️ CRUD Operation Mapping

| Operation | React UI Action | HTTP Method | API Endpoint | MongoDB Operation |
|-----------|-----------------|-------------|--------------|-------------------|
| **Create** | Add Student Form Submit | `POST` | `/students` | `student.save()` |
| **Read** | Display Students Table | `GET` | `/students` | `Student.find()` |
| **Update** | Edit Student & Update | `PUT` | `/students/:id` | `Student.findByIdAndUpdate()` |
| **Delete** | Delete Button Click | `DELETE` | `/students/:id` | `Student.findByIdAndDelete()` |

---

## 📁 Folder Structure

```
Experiment-12/
│
├── README.md                                          ← This file
├── Ex-12.html                                         ← Standalone Full Stack Student Management System UI
├── index.html                                         ← Mirror of Ex-12.html
├── FullStack_NodeJS_ReactJS_MongoDB_Lab.docx          ← Lab manual
└── FullStackStudentApp/                               ← Full-stack project source
    ├── backend/
    │   ├── server.js                                  ← Express REST API & Mongoose connection
    │   └── package.json                               ← Backend dependencies (express, mongoose, cors)
    └── frontend/
        ├── src/
        │   ├── App.jsx                                ← React CRUD component with Axios
        │   ├── App.css                                ← Application styling
        │   └── main.jsx                               ← React entry point
        ├── index.html                                 ← Frontend HTML entry
        ├── vite.config.js                             ← Vite bundler configuration
        └── package.json                               ← Frontend dependencies (react, axios)
```

---

## 🚀 How to Run Locally

### 1. Start the Backend API
```bash
cd Experiment-12/FullStackStudentApp/backend
npm install
node server.js
```
The backend server runs on `http://localhost:5000`.

### 2. Start the Frontend React App
```bash
cd Experiment-12/FullStackStudentApp/frontend
npm install
npm run dev
```
The React development server runs on `http://localhost:5173`.

---

## ➕ How to Add a New File

See the guide in [Experiment 1 README](../Experiment-1/README.md#-how-to-add-a-new-file) — same steps apply (just change `1` → `12` in filenames and commit messages).

---

## 🔗 Back to Main Lab

[← Return to Main README](../README.md)
