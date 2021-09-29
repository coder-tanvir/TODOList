import React from "react";
import { useState } from "react/cjs/react.development";
import TodoForm from "./TodoForm";

const Todolist = () => {
  const [todos, inserttodo] = useState([]);
  const addtodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newtodo = [todo, ...todos];
    inserttodo(newtodo);
  };
  return (
    <div className="todo-app">
      <h1>What's The Plan!</h1>
      <TodoForm />
    </div>
  );
};

export default Todolist;
