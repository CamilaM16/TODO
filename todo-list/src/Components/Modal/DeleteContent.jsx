import React, { useState } from "react";
import { useTasksDispatch } from "../TaskContext";
import ModalContainer from "../Modal/ModalContainer";

export function DeleteContent({ id }) {
  const dispatch = useTasksDispatch();
  const [openDelete, setOpenDelete] = useState(false);

  const close = () => setOpenDelete(false);
  const open = () => setOpenDelete(true);
  function remove() {
    dispatch({
      type: "deleted",
      id: id,
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
