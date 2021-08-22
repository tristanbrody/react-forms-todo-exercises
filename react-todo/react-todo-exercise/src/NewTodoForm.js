import React, { useState } from "react";

function NewTodoForm({ addTodo }) {
  const [formData, setFormData] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(data => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(formData);
    setFormData("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Add new to-do</label>
      <input
        type="text"
        name="task"
        value={formData.task}
        onChange={handleChange}
      ></input>
      <button>Add</button>
    </form>
  );
}

export default NewTodoForm;
