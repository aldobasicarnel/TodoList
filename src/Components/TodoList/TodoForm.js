import React, { useState } from "react";
import { db } from "../FirebaseConfig/firebase";
import classes from "./TodoForm.module.css";

const TodoForm = (props) => {
  const [input, setInput] = useState("");

  const todoChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const addingTodoHandler = (e) => {
    e.preventDefault();

    db.collection("todos").add({ completed: false, todo: input });
    setInput("");
  };

  return (
    <form onSubmit={addingTodoHandler}>
      <div className={classes.addTodo}>
        <input
          type="text"
          value={input}
          onChange={todoChangeHandler}
          placeholder="What is your main focus today?"
        ></input>
        <button onClick={addingTodoHandler}>Add Todo</button>
      </div>
    </form>
  );
};

export default TodoForm;
