import React from "react";
import TodoItem from "./TodoItem";
import Todo from "../models/todo";
import classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[]; onDeleteTodo: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => {
        return (
          <TodoItem
            key={item.id}
            item={item.text}
            onDeleteTodo={props.onDeleteTodo.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );
};

export default Todos;
