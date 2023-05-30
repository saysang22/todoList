import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  deleteTodo: (id: string) => {},
});

const TodosContextProvider = (props: React.PropsWithChildren) => {
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

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    deleteTodo: deleteHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
