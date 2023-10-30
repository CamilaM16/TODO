import axios from "axios";
import React, { useEffect } from "react";
import TaskItem from "../Task/TaskItem";
import { useTasks, useTasksDispatch, useTotalContext } from "../TaskContext";
import { TASK_URL } from "../../Services/listService";
import "./TaskItem.css";

export default function TaskList() {
  const dispatch = useTasksDispatch();
  const { setTotal } = useTotalContext();

  const list = useTasks();
  useEffect(() => {
    axios.get(`${TASK_URL}`).then((response) => {
      const list = response.data;
      dispatch({
        type: "loadData",
        tasks: list,
      });
      setTotal(list.length);
    });
  }, [dispatch, setTotal]);
  
  return (
    <ul className="accordion">
      {list.map((taskItem, index) => {
        return (
          <li key={index}>
            <TaskItem taskItem={taskItem} />
          </li>
        );
      })}
    </ul>
  );
}
