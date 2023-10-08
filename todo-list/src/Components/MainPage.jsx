import React from "react";
import TaskList from "./Task/TaskList";
import ContainerTaskList from "./Task/ContainerTaskList";
import InputText from "../Components/Input/InputText";
import { TasksProvider } from "./TaskContext";

export default function MainPage() {
  React.useEffect(() => {}, []);

  return (
    <TasksProvider>
      <ContainerTaskList title={"To-Do List"}>
        <InputText />
        <TaskList />
      </ContainerTaskList>
    </TasksProvider>
  );
}
