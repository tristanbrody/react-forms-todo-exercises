import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuid } from "uuid";

function TodoList() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = todo => {
    const newTodo = { ...todo, id: uuid() };
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = id => {
    setTodoList(
      todoList.filter(todo => {
        return id !== todo.id;
      })
    );
  };

  return (
    <div>
      <ul>
        {todoList.map(t => {
          return <Todo removeTodo={removeTodo} task={t.task} id={t.id} />;
        })}
      </ul>
      <NewTodoForm addTodo={addTodo} />
    </div>
  );
}

export default TodoList;
