import { useState, useEffect } from "react";
import { db } from "../FirebaseConfig/firebase";
import TodoForm from "./TodoForm";

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
    <div>
      <TodoForm onSubmit={getTodos} />

      <div>
        {todos.length > 0 &&
          todos.map((todo) => (
            <div key={todo.id}>
              {todo.todo}
              <button type="submit" onClick={() => deleteTodoHandler(todo.id)}>
                Delete
              </button>
              <button onClick={() => completeTodoHandler(todo.id)}>Done</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TodoPage;
