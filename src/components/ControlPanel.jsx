import React from "react";
import ColorInput from "./ColorInput";

const ControlPanel = () => {
  return (
    <div className="w-96 ml-6">
      <div className="mb-4">
        <h1 className="text-3xl font-display">Color Scales Generator</h1>
        <p>
          Create beautiful and customizable color scales for your design
          projects effortlessly.
        </p>
      </div>
      <div className="h-[55vh] overflow-y-auto">
        <ColorInput />
      </div>
    </div>
  );
};

export default ControlPanel;
