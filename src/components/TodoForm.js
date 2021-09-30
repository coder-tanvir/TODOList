import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setinput] = useState("");

  const inputref = useRef(null);

  useEffect(() => {
    inputref.current.focus();
  });

  const handlesubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setinput("");
  };

  const handlechange = (e) => {
    setinput(e.target.value);
  };
  return (
    <form className="todo-form" onSubmit={handlesubmit}>
      <input
        type="text"
        placeholder="Add Something"
        value={input}
        name="text"
        className="todo-input"
        onChange={handlechange}
        ref={inputref}
      />
      <button className="todo-button">➕</button>
    </form>
  );
}

export default TodoForm;
