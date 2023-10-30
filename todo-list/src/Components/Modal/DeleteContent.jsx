import axios from "axios";
import React, { useState } from "react";
import { TASK_URL } from "../../Services/listService";
import { useTasksDispatch, useTotalContext } from "../TaskContext";
import ModalContainer from "../Modal/ModalContainer";

export function DeleteContent({ id }) {
  const dispatch = useTasksDispatch();
  const [openDelete, setOpenDelete] = useState(false);
  const { total, setTotal } = useTotalContext();

  const close = () => setOpenDelete(false);
  const open = () => setOpenDelete(true);
  function remove() {
    axios
      .delete(`${TASK_URL}/${id}`)
      .then(() => {
        dispatch({
          type: "deleted",
          id: id,
        });
        setTotal(total - 1);
      })
      .catch(() => {
        alert("Error: Post deleted! on Data Base :(");
      });
    close();
  }
  return (
    <>
      <button onClick={open}>Delete</button>

      <ModalContainer
        title={"Are you sure you want to delete this task?"}
        modalVisible={openDelete}
        closeModal={close}
      >
        <div className="pt-4 flex items-center justify-between">
          <button
            className="w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
            type="button"
            onClick={remove}
          >
            Yes, I'm sure
          </button>
          <button
            className="w-full bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300"
            type="button"
            onClick={close}
          >
            No, cancel
          </button>
        </div>
      </ModalContainer>
    </>
  );
}
