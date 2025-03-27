import React, { useContext } from "react";
import ColorInput from "./ColorInput";
import { ColorContext } from "../../contexts/colorContext";
import {
  determineBaseScale,
  generateRandomHexColor,
  generateScale,
} from "../../utils/color";

const ControlPanel = () => {
  const { state, dispatch } = useContext(ColorContext);

  const handleClick = (name) => {
    const color = generateRandomHexColor();
    const baseScale = determineBaseScale(color);
    const scale = generateScale(color);

    dispatch({
      type: `SET_${name}_COLOR`,
      payload: {
        name: name.toLowerCase(),
        color,
        scale,
        baseScale,
      },
    });
  };

  return (
    <div className="w-96 ml-6">
      <div className="mb-4">
        <h1 className="text-3xl font-display">Color Scales Generator</h1>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm">
          Create beautiful and customizable color scales for your design
          projects effortlessly.
        </p>
      </div>
      <div className="h-[55vh] overflow-y-auto pr-2">
        <ColorInput />
        {state.secondaryColor.isAdded ? (
          <ColorInput colorType="secondary" />
        ) : (
          <button
            className="mb-6 w-full bg-neutral-800 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-800 py-2 rounded-full cursor-pointer hover:bg-neutral-700 dark:hover:bg-neutral-300"
            onClick={() => handleClick("SECONDARY")}
          >
            + Add secondary color
          </button>
        )}

        {state.secondaryColor.isAdded && (
          <>
            {state.tertiaryColor.isAdded ? (
              <ColorInput colorType="tertiary" />
            ) : (
              <button
                className="-mt-2 mb-6 w-full bg-neutral-800 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-800 py-2 rounded-full cursor-pointer hover:bg-neutral-700 dark:hover:bg-neutral-300"
                onClick={() => handleClick("TERTIARY")}
              >
                + Add tertiary color
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ControlPanel;
