import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Todo = ({ todos, completetodo, removetodo, updatetodo }) => {
  console.log(todos);
  const [edit, setedit] = useState({
    id: null,
    value: "",
  });
  const submitupdate = (value) => {
    updatetodo(edit.id, value);
    setedit({
      id: null,
      value: "",
    });
  };
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitupdate} />;
  }

  const rendertodo = todos.map((todo, index) => {
    return (
      <div
        className={todo.isComplete ? "todo-row complete" : "todo-row"}
        key={index}
      >
        <div
          key={todo.id}
          onClick={() => {
            completetodo(todo.id);
          }}
        >
          {todo.text}
        </div>
        <div className="icons">
          <RiCloseCircleLine onClick={() => removetodo(todo.id)} />
          <TiEdit
            onClick={() => setedit({ id: todo.id, value: todo.text })}
            className="edit-icon"
          />
        </div>
      </div>
    );
  });
  return <div>{rendertodo}</div>;
};

export default Todo;
