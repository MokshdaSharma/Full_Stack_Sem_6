# Experiment 4  
## Global State Management using React Context API

---

## 🎯 Aim

To implement global state management in a Single Page Application (SPA) using the React Context API.

---

## 🛠️ Software Requirements

- Node.js
- React (Vite)
- VS Code
- Web Browser

---

## 📚 Theory

In React applications, passing data through multiple components using props can become complex. This problem is known as **prop drilling**.

The **React Context API** provides a way to share global data such as themes, user information, or application settings across components without passing props manually at every level.

### Key Concepts Used:

- `createContext()` → Creates a global state container  
- `Context.Provider` → Supplies global state to components  
- `useContext()` → Consumes global state inside child components  

---

## 🏗️ Project Structure


---

## ⚙️ Procedure

1. Created a React project using:

## ⚙️ Procedure

1. Created a React project using:
npm create vite@latest


2. Installed dependencies:
npm install


3. Created a Context using `createContext()`.

4. Wrapped the application with `GlobalProvider`.

5. Used `useContext()` inside child components to access global state.

6. Implemented:
- User state
- Theme toggle functionality

---

## 💡 Features Implemented

- Global user state
- Global theme state (Light/Dark mode)
- Toggle theme button
- Dynamic username update
- Full-page responsive layout

---

## 🖥️ Output Description

- Navbar displays current user name.
- Clicking **Change User Name** updates global state.
- Clicking **Toggle Theme** changes the entire application's theme.
- No prop drilling used.

---

## 🚀 Conclusion

This experiment successfully demonstrates how React Context API can be used to manage global state in a Single Page Application. It eliminates prop drilling and improves maintainability and scalability of React applications.

---

## 📸 Screenshots

### 1️⃣ Light Theme View
![Light Theme](./screenshots/ss1.png)

### 2️⃣ Dark Theme View
![Dark Theme](./screenshots/ss2.png)

### 3️⃣ User Name Updated View
![User Updated](./screenshots/ss3.png)

---

