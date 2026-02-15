# Experiment 2  
## State Management Using Redux (Counter Application)

---

## 🎯 Aim

To implement centralized state management using Redux in a React application.

---

## 🛠️ Software Requirements

- Node.js
- React (Vite)
- Redux Toolkit
- React-Redux
- VS Code
- Web Browser

---

## 📚 Theory

Redux is a predictable state container for JavaScript applications. It stores the application state in a single global store and updates it using actions and reducers.

Redux Toolkit simplifies Redux implementation by reducing boilerplate code and providing built-in best practices.

### Key Concepts Used:

- **Store** → Centralized state container
- **Slice** → Combines reducers and actions
- **Reducer** → Updates state
- **Action** → Describes what happened
- **Provider** → Makes store available to components
- **useSelector()** → Access state
- **useDispatch()** → Dispatch actions

---

## 🏗️ Project Structure


---

## ⚙️ Procedure

1. Created a React project using:

npm create vite@latest


2. Installed dependencies:

npm install @reduxjs/toolkit react-redux


3. Created a Redux store using `configureStore()`.

4. Defined a slice using `createSlice()`.

5. Wrapped the application with `Provider`.

6. Used `useSelector()` and `useDispatch()` hooks to manage state.

---

## 💡 Features Implemented

- Increment counter
- Decrement counter
- Reset counter
- Centralized state management
- Fully centered responsive UI

---

## 🔁 Redux Data Flow

Component → dispatch(action) → Reducer → Store Update → Component Re-render

---

## 🖥️ Output

The application displays a counter value with three buttons:

- Increment
- Decrement
- Reset

The counter updates globally using Redux state.

---

## 🚀 Conclusion

This experiment successfully demonstrates centralized state management using Redux Toolkit in a React application. It ensures predictable state updates and improves scalability and maintainability.

---


