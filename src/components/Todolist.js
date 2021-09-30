import React from "react";
import { useState } from "react/cjs/react.development";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const Todolist = () => {
  const [todos, inserttodo] = useState([]);
  //Adding Todo list
  const addtodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newtodo = [todo, ...todos];
    inserttodo(newtodo);
    console.log(newtodo);
  };

  //Edit todo
  const updatetodo = (todoid, newvalue) => {
    if (!newvalue.text || /^\s*$/.test(newvalue.text)) {
      return;
    }
    inserttodo((prev) =>
      prev.map((item) => (item.id === todoid ? newvalue : item))
    );
  };

  ////Complete todo
  const completetodo = (id) => {
    let updatedtodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    inserttodo(updatedtodo);
  };
  const removetodo = (id) => {
    const removearr = [...todos].filter((todo) => todo.id !== id);
    inserttodo(removearr);
  };

  return (
    <div className="todo-app">
      <h1>What's The Plan!</h1>
      <TodoForm onSubmit={addtodo} />
      <Todo
        todos={todos}
        completetodo={completetodo}
        removetodo={removetodo}
        updatetodo={updatetodo}
      />
    </div>
  );
};

export default Todolist;
