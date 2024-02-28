import React, { useState } from "react";

function Task({ children, id, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(children);
  const [taskDeclaration, setTaskDeclaration] = useState("");
  const [typingAllowed, setTypingAllowed] = useState(false);
  const [priorityLevel, setPriorityLevel] = useState("low");

  const renderDefaultCard = () => {
    return (
      <div className={`what-to-do ${priorityLevel}`}>
        <div>{text}</div>
        <div>
          <button className="edit-button" onClick={edit}>
            edit
          </button>
          <button className="trash-button" onClick={deleteTask}>
            remove
          </button>
        </div>
      </div>
    );
  };

  const renderEditCard = () => {
    return (
      <div className="what-to-do">
        <button className="success-button" onClick={toggleTyping}>
          {typingAllowed ? "Save Task Declaration" : "Declare Task"}
        </button>
        <button className="success-button" onClick={saveChanges}>
          Save Changes
        </button>
        <div>
          <textarea
            value={taskDeclaration}
            onChange={(e) => setTaskDeclaration(e.target.value)}
            readOnly={!typingAllowed}
          />
        </div>
        <div>
          <label htmlFor="priority">Priority Level:</label>
          <select
            id="priority"
            value={priorityLevel}
            onChange={handlePriorityChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>
    );
  };

  const edit = () => {
    console.log("editing task");
    setEditing(true);
    setTypingAllowed(false);
    setTaskDeclaration("");
  };

  const deleteTask = () => {
    console.log("task deleted");
    onDelete(id);
  };

  const toggleTyping = () => {
    console.log("toggling typing");
    setTypingAllowed(!typingAllowed);
    if (!typingAllowed) {
      setTaskDeclaration("");
    }
  };

  const handlePriorityChange = (e) => {
    setPriorityLevel(e.target.value);
  };

  const saveChanges = () => {
    console.log("changes saved:", taskDeclaration);
    setText(taskDeclaration);
    setEditing(false);
  };

  return editing ? renderEditCard() : renderDefaultCard();
}

export default Task;
