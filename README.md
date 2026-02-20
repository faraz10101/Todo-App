# 📝 Realtime Todo App

A simple and powerful Todo App built using **Vanilla JavaScript** and **Firebase Realtime Database**.

This project demonstrates how to:
- Connect a web app with Firebase
- Store data in real-time database
- Fetch data in realtime
- Edit and delete records
- Implement secure Firebase rules

---

## 🚀 Features

- ✅ Add new todos
- ✏️ Edit existing todos
- ❌ Delete todos
- 🔄 Realtime data sync
- 💾 Persistent storage (No data loss on refresh)
- 🔐 Firebase Authentication support (optional)

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Firebase Realtime Database

---

## 📂 Project Structure
├── index.html
├── style.css
├── app.js
└── README.md


---

## ⚙️ How It Works

1. User adds a todo.
2. Todo is saved to Firebase using a unique key.
3. Firebase `child_added` listener fetches data in realtime.
4. UI automatically updates without page refresh.
5. Edit/Delete updates both Firebase and UI instantly.

---

## 🔥 Firebase Setup

1. Create a Firebase project.
2. Enable **Realtime Database**.
3. Set secure database rules:

```json
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}

