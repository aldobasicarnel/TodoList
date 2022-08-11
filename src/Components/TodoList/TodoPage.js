import { useState, useEffect } from "react";
import Card from "../Card/Card";
import { db } from "../FirebaseConfig/firebase";
import TodoForm from "./TodoForm";
import classes from "./TodoPage.module.css";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = () => {
    db.collection("todos").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          completed: doc.data().completed,
        }))
      );
    });
  };

  useEffect(() => {
    getTodos();
  }, []);

  const deleteTodoHandler = (id) => {
    db.collection("todos").doc(id).delete({ id: id });
  };
  const completeTodoHandler = (id, completed) => {
    db.collection("todos").doc(id).update({ completed: !completed });
  };

  return (
    <Card>
      <TodoForm onSubmit={getTodos} />
      <h3>Your list:</h3>
      <div className={classes.text}>
        {todos.length > 0 &&
          todos.map((todo) => (
            <div key={todo.id}>
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.todo}
              </span>
              <button
                className={classes.btn}
                type="submit"
                onClick={() => deleteTodoHandler(todo.id)}
              >
                <i className="bi bi-x-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="currentColor"
                    className="bi bi-x-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                  </svg>
                </i>
              </button>
              <button
                className={classes.btn}
                onClick={() => completeTodoHandler(todo.id, todo.completed)}
              >
                <i className="bi bi-check2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="currentColor"
                    className="bi bi-check2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                </i>
              </button>
            </div>
          ))}
      </div>
    </Card>
  );
};

export default TodoPage;
