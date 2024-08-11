import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);//initialize tasks state
  const [selectedCategory, setSelectedCategory] = useState("All");


  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Filter tasks based on the selected category
  const filteredTasks = selectedCategory === "All"
    ? tasks
    : tasks.filter(task => task.category === selectedCategory);

  // Ensure tasks is always an array before calling map
  const taskList = Array.isArray(filteredTasks) ? filteredTasks : [];

    <ul>
        {taskList.map((task, index) => (
          <li key={index}>
            <strong>{task.text}</strong> - {task.category}
          </li>
        ))}
      </ul>  

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategoryChange={setSelectedCategory} selectedCategory={selectedCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={tasks} categories={CATEGORIES} />
    </div>
  );
}

export default App;
