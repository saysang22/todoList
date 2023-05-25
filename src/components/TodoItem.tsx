import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ item: string; onDeleteTodo: () => void }> = (
  props
) => {
  return (
    <li className={classes.item}>
      {props.item}
      <button onClick={props.onDeleteTodo}>삭제</button>
    </li>
  );
};

export default TodoItem;
