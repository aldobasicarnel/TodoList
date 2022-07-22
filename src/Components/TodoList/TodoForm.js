import React, { useState } from "react";
const TodoForm = (props) => {
  const [input, setInput] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    addingTodoHandler(input);
    setInput("");
  };

  const todoChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const addingTodoHandler = (todo) => {
    fetch(
      "https://todo-list-fe2fd-default-rtdb.firebaseio.com/todoList/text.json",
      {
        method: "POST",
        body: JSON.stringify({
          text: todo,
        }),
        headers: {
          "Content-type": "aplication/json; charset=UTF-8",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        props.onSubmit({
          id: data.name,
          text: todo,
        });
      });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="add-todo">
          <input
            type="text"
            value={input}
            onChange={todoChangeHandler}
            placeholder="What is your main focus today?"
          ></input>
          <button onClick={submitHandler}>Add Todo</button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
