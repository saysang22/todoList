import React, { FormEvent, useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText?.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo list</label>
      <input type="text" id="text" ref={todoTextInputRef}></input>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
