# 🧪 Experiment 9 — Working with MongoDB Using Shell Commands

> **Course:** Web Technology Lab  
> **Experiment No.:** 9  

---

## 📌 Objective

To study MongoDB and perform basic database operations using MongoDB Shell (`mongosh`): database and collection creation, document insertion, retrieval, filtering with comparison and logical operators, projection, sorting, counting, updates, deletions, and aggregation on a student database (`collegeDB`).

---

## 🌐 Live Demo

🔗 **[Open Live MongoDB Console Experiment](https://abin-shaji-thomas.github.io/Web-Technology-Lab/Experiment-9/Ex-9.html)**

---

## 📝 Exercises

| # | Exercise | Topic | File |
|---|----------|-------|------|
| 1 | MongoDB Shell & Student DB Console | Interactive `mongosh` terminal, CRUD (`insertOne`, `find`, `updateOne`, `deleteOne`), comparison (`$gt`, `$lte`), logical (`$or`), projection, aggregation | [Ex-9.html](./Ex-9.html) |

---

## 📝 MongoDB Shell Commands Reference

| # | Operation | mongosh Command |
|---|-----------|-----------------|
| 1 | View databases | `show dbs` |
| 2 | Select database | `use collegeDB` |
| 3 | Create collection | `db.createCollection("students")` |
| 4 | Insert one document | `db.students.insertOne({ rollno: 101, name: "Abin Shaji", department: "CSE", year: 3, marks: 85, city: "Chennai" })` |
| 5 | Insert multiple documents | `db.students.insertMany([...])` |
| 6 | Retrieve all documents | `db.students.find()` |
| 7 | Search one document | `db.students.findOne({ rollno: 103 })` |
| 8 | Filter condition | `db.students.find({ department: "CSE" })` |
| 9 | Comparison operator | `db.students.find({ marks: { $gt: 80 } })` |
| 10 | Logical AND query | `db.students.find({ department: "CSE", year: 3 })` |
| 11 | Logical OR query | `db.students.find({ $or: [{ department: "CSE" }, { marks: { $gt: 85 } }] })` |
| 12 | Field projection | `db.students.find({}, { name: 1, marks: 1, _id: 0 })` |
| 13 | Sort ascending / descending | `db.students.find().sort({ marks: -1 })` |
| 14 | Limit results | `db.students.find().sort({ marks: -1 }).limit(3)` |
| 15 | Count documents | `db.students.countDocuments({ department: "CSE" })` |
| 16 | Update one document | `db.students.updateOne({ rollno: 101 }, { $set: { marks: 90 } })` |
| 17 | Increment numeric value | `db.students.updateOne({ rollno: 103 }, { $inc: { marks: 5 } })` |
| 18 | Delete document | `db.students.deleteOne({ rollno: 105 })` |
| 19 | Distinct field values | `db.students.distinct("department")` |
| 20 | Department average marks | `db.students.aggregate([{ $group: { _id: "$department", avgMarks: { $avg: "$marks" } } }])` |
| 21 | Department student count | `db.students.aggregate([{ $group: { _id: "$department", totalStudents: { $sum: 1 } } }])` |

---

## 📁 Folder Structure

```
Experiment-9/
│
├── README.md                                                  ← This file
├── Ex-9.html                                                  ← Interactive MongoDB Shell & Database Manager UI
├── index.html                                                 ← Mirror of Ex-9.html
└── Practicum No 9 MongoDB_Shell_Commands_Lab_Experiment.docx  ← Lab manual
```

---

## ➕ How to Add a New File

See the guide in [Experiment 1 README](../Experiment-1/README.md#-how-to-add-a-new-file) — same steps apply (just change `1` → `9` in filenames and commit messages).

---

## 🔗 Back to Main Lab

[← Return to Main README](../README.md)
