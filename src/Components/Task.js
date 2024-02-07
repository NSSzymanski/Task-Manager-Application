import React, { useState } from "react";

function Task({ children, id, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(children);

  const renderDefaultCard = () => {
    return (
      <div className="what-to-do">
        {editing ? <h3>{text}</h3> : <h3>{text}</h3>}
        <button className="edit-button" onClick={edit}>
          edit
        </button>
        <button className="trash-button" onClick={deleteTask}>
          remove
        </button>
      </div>
    );
  };

  const renderEditCard = () => {
    return (
      <div className="what-to-do">
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
        <button className="success-button" onClick={save}>
          save
        </button>
      </div>
    );
  };

  const edit = () => {
    console.log("editing task");
    setEditing(true);
  };

  const deleteTask = () => {
    console.log("task deleted");
    onDelete(id);
  };

  const save = () => {
    console.log(`The saved text is "${text}"`);
    setEditing(false);
  };

  return editing ? renderEditCard() : renderDefaultCard();
}

export default Task;
