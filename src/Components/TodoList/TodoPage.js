import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
const TodoPage = () => {
  const [todos, setTodos] = useState([]);

  const addingTodo = (todo) => {
    console.log(todo);
    const newTodos = {
      id: todo.id,
      text: todo.text,
      complete: false,
    };

    setTodos([...todos].concat(newTodos));
  };

  useEffect(() => {
    fetch(
      "https://todo-list-fe2fd-default-rtdb.firebaseio.com/todoList/text.json"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        let arr = [];
        Object.keys(data).forEach((key) => {
          arr.push({
            ...data[key],
            id: key,
          });
        });
        setTodos(arr);
      });
  }, []);

  const deleteTodoHandler = (id) => {
    fetch(
      `https://todo-list-fe2fd-default-rtdb.firebaseio.com/todoList/text/${id}/text.json`,
      {
        method: "DELETE",
        body: JSON.stringify({
          id: id,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setTodos([...todos].filter((todo) => todo.id !== todo.todoId));
        window.location.reload(true);
        console.log(data);
      });
  };

  return (
    <div>
      <TodoForm onSubmit={addingTodo} />

      <div>
        {todos.length > 0 &&
          todos.map((todo, i) => (
            <div key={i}>
              {todo.text}
              <button onClick={() => deleteTodoHandler(todo.id)}>Delete</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TodoPage;

// ODRADITI COMMIT NAKON ISPISIVANJA TODO NA SAJTU!
