import React, { useState } from "react";
import Form from "../Form/Form";
import "./TaskItem.css";
import { DeleteContent } from "../Modal/DeleteContent";
import { EditModal } from "../Modal/EditModal";

export default function TaskItem({ taskItem }) {
  const [open, setOpen] = useState(false);
  const [openAcordion, setOpenAcordion] = useState(true);
  const n = 8;
  const identifier = taskItem.id.slice(0, n);
  const classInput = `input-${identifier}`;
  const classCheck = `check-${identifier}`;

  function toggleRadio(radio) {
    setOpenAcordion(!openAcordion);
    radio.target.checked = openAcordion;
  }

  return (
    <>
      {open ?? (
        <Form tittle={"Edit Task"} taskItem={taskItem} setOpen={setOpen} />
      )}
      <div className="accordion-item">
        <input
          type="radio"
          name="accordion"
          className="invisible-radio"
          id={classInput}
          onClick={toggleRadio}
        />
        <label className="accordion-header" htmlFor={classInput}>
          <div className="task-container">
            <input
              defaultChecked={taskItem.status}
              id={classCheck}
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="title-task" htmlFor={classCheck}>
              {taskItem.task}{" "}
            </label>
            <div className="button-container">
              <DeleteContent id={taskItem.id} />
              <EditModal taskItem={taskItem} />
            </div>
          </div>
        </label>
        <div className="accordion-panel">
          <p>{taskItem.detail}</p>
        </div>
      </div>
    </>
  );
}
