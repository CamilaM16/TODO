import axios from "axios";
import React from "react";
import { TASK_URL } from "../../Services/listService";
import { useTasksDispatch, useTotalContext } from "../TaskContext";
import "./InputText.css";

export default function InputText() {
  const dispatch = useTasksDispatch();
  const [text, setText] = React.useState("");
  const { total, setTotal } = useTotalContext();

  function addTask() {
    if (text) {
      axios
        .post(TASK_URL, {
          task: text,
          status: false,
          detail: "",
          category: "Simple Task",
        })
        .then((response) => {
          const currentTask = response.data;
          setTotal(total + 1);
          dispatch({
            type: "added",
            task: currentTask.task,
            id: currentTask.id,
          });
        })
        .catch(() => {
          alert("Error: Adding Task! on Data Base:(");
        });
      setText("");
    }
  }

  return (
    <div className="add-container">
      <input
        type="text"
        className="textInput"
        name="text"
        placeholder="Add new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button className="add-button" onClick={addTask}>
        Add task
      </button>
    </div>
  );
}
