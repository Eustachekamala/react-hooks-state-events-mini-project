import React from "react";
import Task from "./Task";
import { useState } from "react";
import { TASKS } from "../data";

function TaskList({ onTaskFormSubmit,tasks }) {
  const [task, setTask] = useState(TASKS);//initialize task state

  const handleTaskDelete = (id) => {
    setTask(task.filter((task) => task.text !== id));//remove task from state
  };

  return (
    <div className="tasks">
        {task.map((task, index) => {//map over tasks
          if (task.text === "") {//if task is empty
            return <Task key={index} task={task} onTaskDelete={handleTaskDelete} onTaskFormSubmit={onTaskFormSubmit} />;
          }
          return (
            <Task
              key={index}
              task={task}
              onTaskDelete={handleTaskDelete}
              onTaskFormSubmit={onTaskFormSubmit}
            />
          );
        })}
    </div>
  );
}

export default TaskList;
