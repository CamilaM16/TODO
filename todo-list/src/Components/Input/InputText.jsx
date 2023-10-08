import React from "react";

export default function InputText({ text, onClick }) {
  return (
    <div>
      <input
        type="text"
        className="textInput"
        name="text"
        placeholder="Add new task..."
        value={text}
      ></input>
      <button onClick={onClick}> Add task </button>
    </div>
  );
}
