import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";

const Modal = ({ children, close }) => {
  const modalRoot = document.getElementById("modal-root") as HTMLElement;

  return ReactDOM.createPortal(
    <>
      <div className="modal-container">
        <div className="modal">{children}</div>
      </div>
      <div
        className="overlay"
        onClick={() => {
          close();
        }}
      ></div>
    </>,
    modalRoot
  );
};

export default Modal;
