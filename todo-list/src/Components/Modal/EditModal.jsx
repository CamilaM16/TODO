import axios from "axios";
import React, { useState } from "react";
import { useTasksDispatch } from "../TaskContext";
import { TASK_URL } from "../../Services/listService";
import ModalContainer from "../Modal/ModalContainer";
import Form from "../Form/Form";

export function EditModal({ taskItem }) {
  const dispatch = useTasksDispatch();
  const [openEdit, setOpenEdit] = useState(false);

  const close = () => setOpenEdit(false);
  const open = () => setOpenEdit(true);

  function handleSubmit(task) {
    axios
      .put(`${TASK_URL}/${task.id}`, {
        task: task.task,
        detail: task.detail,
        status: false,
        category: "Simple Task",
        subTasks: null,
      })
      .then(() => {
        dispatch({
          type: "changed",
          task: task,
        });
      });

    close();
  }
  return (
    <>
      <button onClick={open}>Edit</button>

      <ModalContainer title={"Edit"} modalVisible={openEdit} closeModal={close}>
        <div>
          <Form taskItem={taskItem} handleSubmit={handleSubmit}>
            <div className="flex items-center justify-between ">
              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
              >
                Save
              </button>
              <button
                type="cancel"
                className="bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300"
                onClick={close}
              >
                Cancel
              </button>
            </div>
          </Form>
        </div>
      </ModalContainer>
    </>
  );
}
