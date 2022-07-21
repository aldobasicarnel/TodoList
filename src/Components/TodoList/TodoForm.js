import React, { useState } from "react";
const TodoForm = (props) => {
  const [input, setInput] = useState("");
  //  const [todos, setTodos] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();
    /*
    const newTodos = {
      id: Math.random().toString(),
      text: input,
      complete: false,
    };

    setTodos([...todos].concat(newTodos));
  */
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
        props.onSubmit(data);
      });
  };
  /*
  const deleteTodoHandler = (id) => {
    const deletedTodo = [...todos].filter((input) => input.id !== id);
    setTodos(deletedTodo);
  };
*/
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
