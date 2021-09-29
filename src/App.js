import React from "react";
import TodoForm from "./components/TodoForm";
import Todolist from "./components/Todolist";

const App = () => {
  return (
    <div className="todo-app">
      <Todolist />
    </div>
  );
};

export default App;
