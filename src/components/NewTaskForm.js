import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const newTaskForm = {
      text: task,
      category: category
    };
    
    onTaskFormSubmit(newTaskForm);
    
    // Reset the form fields when the form is submitted
    setTask("");
    setCategory(categories[0] || '');
  };

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
        />
      </label>
      <label>
        Category
        <select 
          name="category" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((task, index) => (
            <option key={index} value={task}>
              {task}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" className="btn btn-primary" onClick={handleSubmit} />
    </form>
  );
}

export default NewTaskForm;
