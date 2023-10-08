import React from "react";
import Arrow from "../../utils/icon/Arrow";
import { useTasksDispatch } from "../TaskContext";
import Form from "../Form/Form";

export default function TaskItem({ taskItem }) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useTasksDispatch();

  function editTask() {
    setOpen(true);
  }

  function removeTask() {
    dispatch({
      type: "deleted",
      id: taskItem.id,
    });
  }
  return (
    <>
      {open ?? <Form tittle={"Edit Task"} taskItem={taskItem} setOpen={setOpen}/>}
      <div
        id="accordion-color"
        data-accordion="collapse"
        data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white"
      >
        <input
          defaultChecked={taskItem.status}
          id="link-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label htmlFor="link-checkbox">{taskItem.task} </label>
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            {taskItem.detail}
          </p>
        </div>
        <button onClick={editTask}>Edit</button>
        <button onClick={removeTask}>Delete</button>
        <Arrow />
      </div>
    </>
  );
}
