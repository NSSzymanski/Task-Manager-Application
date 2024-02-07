import "./App.css";
import React, { useState } from "react";
import TaskList from "./Components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskCount, setTaskCount] = useState(0);

  const addTask = () => {
    if (taskCount < 10) {
      setTasks([...tasks, { id: taskCount, text: "Your Task Here" }]);
      setTaskCount(taskCount + 1);
    }
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h2 className="app-title">Task Manager Application</h2>
      <button onClick={addTask}>Add Task</button>
      <div id="react-component">
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      </div>
      <script src="build/script.js"></script>
    </div>
  );
}

export default App;
