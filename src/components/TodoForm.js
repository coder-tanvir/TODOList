import React, { useState } from "react";

function TodoForm() {
  const [input, setinput] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
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
      />
      <button className="todo-button">➕</button>
    </form>
  );
}

export default TodoForm;
