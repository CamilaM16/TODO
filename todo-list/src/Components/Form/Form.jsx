import React, { useState } from "react";

function InputText({ id, text, inputValue, setInputValue }) {
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="mb-6">
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
        htmlFor={id}
      >
        {text}{" "}
      </label>
      <input
        type="text"
        id={id}
        value={inputValue}
        placeholder={"Enter a valid task"}
        onChange={handleChange}
        className={`bg-gray-50 border ${
          !inputValue ? "border-red-500" : "border-gray-300"
        } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
      />
    </div>
  );
}

function Form({ taskItem, children, handleSubmit }) {
  const [titleValue, settitleValue] = useState(taskItem.task);
  const [detailValue, setDetailValue] = useState(taskItem.detail ?? "");

  function submit(e) {
    e.preventDefault();
    if (titleValue && detailValue) {
      handleSubmit({
        id: taskItem.id,
        task: titleValue,
        detail: detailValue,
      });
    }
  }

  if (taskItem) {
    return (
      <form onSubmit={submit}>
        <InputText
          id={"title"}
          text={"Task:"}
          inputValue={titleValue}
          setInputValue={settitleValue}
        />
        <InputText
          id={"description"}
          text={"Description:"}
          inputValue={detailValue}
          setInputValue={setDetailValue}
        />
        {children}
      </form>
    );
  }
}

export default Form;
