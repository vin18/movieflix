import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

import { useOutsideClick } from "../hooks/useOutsideClick";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const closeModal = () => setOpenName("");
  const openModal = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, closeModal, openModal }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { openModal } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => openModal(opensWindowName) });
}

function Content({ children, name }) {
  const { openName, closeModal } = useContext(ModalContext);
  const ref = useOutsideClick(closeModal);

  if (name !== openName) return null;

  return createPortal(
    <div className="modal-wrapper" ref={ref}>
      <div className="modal-header">
        <div className="modal-close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
            onClick={closeModal}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <div className="modal-body">
        <div>{cloneElement(children, { onCloseModal: closeModal })}</div>
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Content = Content;

Modal.propTypes = {
  children: PropTypes.node,
};

Open.propTypes = {
  children: PropTypes.node,
  opens: PropTypes.string,
};

Content.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
};

export default Modal;
