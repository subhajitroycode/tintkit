import React, { useContext, useState } from "react";
import { ColorContext } from "../../contexts/colorContext";
import ColorScale from "./ColorScale";
import { createPortal } from "react-dom";
import ModalComponent from "../Modals/ModalComponent";

const ColorDisplay = () => {
  const { state } = useContext(ColorContext);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full mx-6 mt-3.5">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-semibold">Color Scales</h2>
        <button
          className="bg-neutral-300 px-2 py-1 rounded-sm text-neutral-600 hover:text-neutral-900 cursor-pointer"
          style={{ display: state.secondaryColor.isAdded ? "block" : "none" }}
          onClick={() => setShowModal(true)}
        >
          Export All
        </button>
        {showModal &&
          createPortal(
            <ModalComponent onClose={() => setShowModal(false)} />,
            document.getElementById("portals")
          )}
      </div>
      <div className="h-[62vh] overflow-y-auto pr-2 lg:pr-0">
        <ColorScale />
        {state.secondaryColor.isAdded && <ColorScale colorType="secondary" />}
        {state.tertiaryColor.isAdded && <ColorScale colorType="tertiary" />}
      </div>
    </div>
  );
};

export default ColorDisplay;
