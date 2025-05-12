import React from "react";

const ModalComponent = ({ onClose, color = "all" }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-neutral-700/15 z-50">
      <div className="fixed top-1/2 left-1/2 -translate-1/2 bg-white p-4 z-50">
        <div>I'm a modal dialog</div>
        <p>{color}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ModalComponent;
