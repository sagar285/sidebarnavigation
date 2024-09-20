import React from "react";

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal-content">
        {[...Array(50)].map((_, index) => (
          <input key={index} type="text" placeholder={`Input ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Modal;
