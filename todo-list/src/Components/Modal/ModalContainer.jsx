import React from "react";
import ReactModal from "react-modal";
import { Close } from "../../utils/icon/Close";
import "./Modal.css";

export default function DeleteButton({
  title,
  modalVisible,
  closeModal,
  children,
}) {
  ReactModal.setAppElement("#root");

  return (
    <ReactModal
      isOpen={modalVisible}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      className="modal"
      aria={{
        labelledby: "heading",
      }}
    >
      <span className="close-modal" onClick={closeModal}>
        <Close />
      </span>
      <h1
        id="heading"
        className="mb-4 text-4xl font-extrabold leading-none tracking-tight dark:text-white"
      >
        {title}
      </h1>
      {children}
    </ReactModal>
  );
}
