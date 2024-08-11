import React from "react";

function Task({ task, onTaskDelete }) {
  //handle delete task
  const handleDelete = () => {
    onTaskDelete(task.text);
  };

  return (
    <div className="task">
      <div className="label">{task.label}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default Task;
