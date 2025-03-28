import React, { useContext } from "react";
import { ColorContext } from "../../contexts/colorContext";
import ColorScale from "./ColorScale";

const ColorDisplay = () => {
  const { state } = useContext(ColorContext);

  return (
    <div className="w-full mx-6 mt-3.5">
      <h2 className="text-2xl font-semibold mb-2">Color Scales</h2>
      <div className="h-[62vh] overflow-y-auto pr-2 lg:pr-0">
        <ColorScale />
        {state.secondaryColor.isAdded && <ColorScale colorType="secondary" />}
        {state.tertiaryColor.isAdded && <ColorScale colorType="tertiary" />}
      </div>
    </div>
  );
};

export default ColorDisplay;
