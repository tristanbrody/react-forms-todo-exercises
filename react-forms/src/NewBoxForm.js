import React, { useState } from "react";

function NewBoxForm({ addBox }) {
  const INITIAL_VALUE = {
    backgroundColor: "",
    width: "",
    height: "",
  };

  const [formData, setFormData] = useState(INITIAL_VALUE);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(data => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    addBox(formData);
    setFormData(INITIAL_VALUE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="backgroundColor">Background color</label>
      <input
        type="text"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      ></input>
      <label htmlFor="width">Width</label>
      <input
        type="text"
        name="width"
        value={formData.width}
        onChange={handleChange}
      ></input>
      <label htmlFor="height">Height</label>
      <input
        type="text"
        name="height"
        value={formData.height}
        onChange={handleChange}
      ></input>
      <button>Add New Box</button>
    </form>
  );
}

export default NewBoxForm;
