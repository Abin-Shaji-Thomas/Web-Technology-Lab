# 🧪 Experiment 8 — Modern UI Design using ReactJS

> **Course:** Web Technology Lab  
> **Experiment No.:** 8  

---

## 📌 Objective

To design and develop a modern, responsive user interface using ReactJS and component-based architecture by applying React components, JSX syntax, Props, State (`useState`), event handling, responsive CSS styling, dynamic list rendering, controlled inputs, and theme switching (Light/Dark mode).

---

## 🌐 Live Demo

🔗 **[Open Live EduDashboard Experiment](https://abin-shaji-thomas.github.io/Web-Technology-Lab/Experiment-8/Ex-8.html)**

---

## 📝 Exercises

| # | Exercise | Topic | File |
|---|----------|-------|------|
| 1 | Student Dashboard (EduDashboard) | React components, Props, State (`useState`), Dark Mode toggle, controlled task manager, stat cards | [Ex-8.html](./Ex-8.html) |

---

## 🏷️ Concepts Demonstrated

| # | Concept | Description |
|---|---------|-------------|
| 1 | React Components | Modular UI division with reusable components |
| 2 | JSX Syntax | Embedding JavaScript expressions `{}` directly inside markup |
| 3 | Props | Passing data downwards from parent to child components |
| 4 | State Management | `useState` hook for toggling dark/light theme and task list |
| 5 | Dynamic Rendering | Array mapping (`courses.map()`, `tasks.map()`) with keys |
| 6 | Controlled Inputs | Form input values bound to state via `value` and `onChange` |
| 7 | Responsive CSS | Media queries adapting dashboard layout across mobile, tablet, and desktop |

---

## 📁 Folder Structure

```
Experiment-8/
│
├── README.md                                          ← This file
├── Ex-8.html                                          ← Standalone Student Dashboard UI
├── index.html                                         ← Mirror of Ex-8.html
├── Practicum No 8 Modern_UI_Design_using_ReactJS_Lab_Experiment.docx  ← Lab manual
└── react-ui-lab/                                      ← Vite React project source
    ├── src/
    │   ├── App.jsx                                    ← Main dashboard application
    │   ├── App.css                                    ← Dashboard & dark mode styling
    │   ├── index.css                                  ← Global resets
    │   ├── main.jsx                                   ← React entry point
    │   └── components/
    │       └── StatCard.jsx                           ← Reusable stat card component
    ├── package.json
    └── vite.config.js
```

---

## 🚀 How to Run the Vite Project Locally

```bash
cd Experiment-8/react-ui-lab
npm install
npm run dev
```

Then navigate to `http://localhost:5173/` in your browser.

---

## ➕ How to Add a New File

See the guide in [Experiment 1 README](../Experiment-1/README.md#-how-to-add-a-new-file) — same steps apply (just change `1` → `8` in filenames and commit messages).

---

## 🔗 Back to Main Lab

[← Return to Main README](../README.md)
