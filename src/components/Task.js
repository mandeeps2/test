// src/Task.js
import React, { useState } from "react";

function Task({ task, onEdit, onDelete, onToggleComplete }) {
  const [isEditing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.text);

  const handleEdit = () => {
    setEditing(!isEditing);
  };

  const handleSave = () => {
    onEdit(task.id, editedTask);
    setEditing(false);
  };

  return (
    <div className="tasklistinner">
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
        />
        <span className={task.completed ? "completed" : ""}>
          {isEditing ? (
            <div>
              <input
                type="text"
                value={editedTask}
                onChange={(e) => setEditedTask(e.target.value)}
              />
              <button className="savebtn" onClick={handleSave}>
                Save
              </button>
            </div>
          ) : (
            task.text
          )}
        </span>
      </div>
      <div>
        <button className="savebtn" onClick={handleEdit}>
          {isEditing ? "Cancel" : "Edit"}
        </button>
        <button className="delbtn" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Task;
