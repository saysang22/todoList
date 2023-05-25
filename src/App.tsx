import React, { useState } from "react";
import "./App.css";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevState) => {
      return [...prevState, newTodo];
    });
  };

  const deleteHandler = (todoId: string) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => {
        return todoId !== todo.id;
      });
    });
  };
  return (
    <>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onDeleteTodo={deleteHandler} />
    </>
  );
}

export default App;
