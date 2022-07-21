import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
const TodoPage = () => {
  const [todos, setTodos] = useState([]);

  const addingTodo = (todo) => {
    const newTodos = {
      id: Math.random().toString(),
      text: todo,
      complete: false,
    };

    setTodos([...todos].concat(newTodos));
    /*
    const newTodo = { todo, ...todos };
    setTodos(newTodo);
    */
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

  return (
    <div>
      <TodoForm onSubmit={addingTodo} />

      <h1>Test {todos.length}</h1>

      <div>
        {todos.length > 0 &&
          todos.map((todo, i) => (
            <div key={i}>
              {todo.text} - {todo.id}
            </div>
          ))}
      </div>
    </div>
  );
};

export default TodoPage;

// ODRADITI COMMIT NAKON ISPISIVANJA TODO NA SAJTU!
