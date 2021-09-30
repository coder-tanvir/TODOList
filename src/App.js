import React from "react";
import TodoForm from "./components/TodoForm";
import Todolist from "./components/Todolist";
import "./App.css";

const App = () => {
  return (
    <div className="todo-app">
      <Todolist />
    </div>
  );
};

export default App;
