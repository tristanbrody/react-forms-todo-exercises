import React from "react";

function Todo({ removeTodo, task, id }) {
  const remove = () => removeTodo(id);
  return (
    <div>
      {task}
      <button onClick={remove}>X</button>
    </div>
  );
}

export default Todo;
