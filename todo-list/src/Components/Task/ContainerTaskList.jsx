import React from "react";
import { useTotalContext } from "../TaskContext";

export default function ContainerTaskList({ title, children }) {
  const { total } = useTotalContext();

  return (
    <div>
      <h1 className="m-4 text-4xl font-extrabold leading-none tracking-tight dark:text-white">
        {title}
      </h1>
      <h3>Total Tasks: {total}</h3>
      {children}
    </div>
  );
}
