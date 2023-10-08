import React from "react";
function InputText({ id, text, dafaultValue }) {
  return (
    <div>
      <label htmlFor={id}>{text}</label>
      <input type="text" id={id} value={dafaultValue} placeholder="Text..." />
    </div>
  );
}

function BaseForm({ taskItem, children }) {
  if (taskItem) {
    return (
      <div>
        <InputText id={"title"} text={"Task:"} dafaultValue={taskItem.task} />
        <InputText
          id={"description"}
          text={"Description:"}
          dafaultValue={taskItem.description}
        />
        {children}
      </div>
    );
  } else {
    return (
      <div>
        <InputText id={"title"} text={"Task:"} />
        <InputText id={"description"} text={"Description:"} />
        {children}
      </div>
    );
  }
}

function Form({ tittle, taskItem, setOpen }) {
  function handleSubmit(event) {
    event.preventDefault();
    setOpen(false);
    console.log("Form submitted");
  }

  function handleAbort(event) {
    setOpen(false);
    console.log("Form aborted");
  }
  return (
    <form className="form" onSubmit={handleSubmit} onAbort={handleAbort}>
      <h1>{tittle}</h1>
      <BaseForm taskItem={taskItem}>
        <div>
          <button type="submit">Save</button>
          <button type="cancel">Save</button>
        </div>
      </BaseForm>
    </form>
  );
}

export default Form;
