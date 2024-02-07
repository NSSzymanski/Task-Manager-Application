import React from "react";
import Task from "./Task";
import Draggable from "react-draggable";

function TaskList({ tasks, deleteTask }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Draggable
          key={task.id}
          axis="both"
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          grid={[1, 1]}
          scale={1}
          onStart={(e, data) => console.log("Drag started", data)}
          onDrag={(e, data) => console.log("Dragging", data)}
          onStop={(e, data) => console.log("Drag stopped", data)}
        >
          <div className="handle">
            {" "}
            {/* This is the handle element */}
            <Task key={task.id} id={task.id} onDelete={deleteTask}>
              {task.text}
            </Task>
          </div>
        </Draggable>
      ))}
    </div>
  );
}

export default TaskList;
