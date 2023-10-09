import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Task from "./Task";

function TodoList() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  //   const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    console.log(storedTasks);
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //   const addTask = () => {
  //     if (newTask.trim() !== "") {
  //       setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
  //       setNewTask("");
  //     }
  //   };
  const addTask = () => {
    if (validateTaskInput(newTask)) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };
  const validateTaskInput = (input) => {
    if (input.trim() === "") {
      setError("Task description cannot be empty.");
      return false;
    }
    setError("");
    return true;
  };

  const editTask = (taskId, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="todolist-main">
      <div className="todolist">
        <h1>Todo List</h1>
        <div className="addlist">
          <input
            type="text"
            placeholder="Add a task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button onClick={addTask}>Add</Button>
          <div className="error">{error}</div>
        </div>
        <div className="tasklist">
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onEdit={editTask}
              onDelete={deleteTask}
              onToggleComplete={toggleComplete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
