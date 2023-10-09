import axios from "axios";
import React, { useEffect } from "react";
import TaskItem from "../Task/TaskItem";
import { useTasks, useTasksDispatch } from "../TaskContext";
import { TASK_URL } from "../../Services/listService";
import "./TaskItem.css";

export default function TaskList() {
  const dispatch = useTasksDispatch();

  const list = useTasks();
  useEffect(() => {
    axios.get(`${TASK_URL}`).then((response) => {
      dispatch({
        type: "loadData",
        tasks: response.data,
      });
    });
  }, [dispatch]);

  return (
    <ul className="accordion">
      {Object.keys(list).map((id) => {
        const taskItem = list[id];
        return (
          <li key={id}>
            <TaskItem taskItem={taskItem} />
          </li>
        );
      })}
    </ul>
  );
}
