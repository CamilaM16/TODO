import React from "react";
import { useTasksDispatch } from "../TaskContext";
import "./InputText.css";


export default function InputText() {
  const dispatch = useTasksDispatch();
  const [text, setText] = React.useState('');

  function addTask() {
    dispatch({
      type: "added",
      task: text,
      id: "132134",
    });
  }

  return (
    <div className="add-container">
      <input
        type="text"
        className="textInput"
        name="text"
        placeholder="Add new task..."
        value={text}
        onChange={e => setText(e.target.value)}
      ></input>
      <button className="add-button" onClick={addTask}>
        Add task
      </button>
    </div>
  );
}
