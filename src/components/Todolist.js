import React from "react";
import { useState } from "react/cjs/react.development";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const Todolist = () => {
  const [todos, inserttodo] = useState([]);
  const addtodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newtodo = [todo, ...todos];
    inserttodo(newtodo);
    console.log(newtodo);
  };
  const completetodo = (id) => {
    let updatedtodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    inserttodo(updatedtodo);
  };
  return (
    <div className="todo-app">
      <h1>What's The Plan!</h1>
      <TodoForm onSubmit={addtodo} />
      <Todo todos={todos} completetodo={completetodo} />
    </div>
  );
};

export default Todolist;
