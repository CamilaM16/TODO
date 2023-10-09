import React from "react";

export default function ContainerTaskList({ title, children }) {
  return (
    <div>
      <h1 className="m-4 text-4xl font-extrabold leading-none tracking-tight dark:text-white">
        {title}
      </h1>
      {children}
    </div>
  );
}
