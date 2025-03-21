import React, { useContext } from "react";
import ColorInput from "./ColorInput";
import { ColorContext } from "../contexts/colorContext";

const ControlPanel = () => {
  const { state, dispatch } = useContext(ColorContext);

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
            className="-mt-2 mb-6 w-full bg-neutral-800 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-800 py-2 rounded-full cursor-pointer"
            onClick={() =>
              dispatch({
                type: "SET_SECONDARY_COLOR",
                payload: { name: "secondary", color: null, scale: [] },
              })
            }
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
                className="-mt-2 mb-6 w-full bg-neutral-800 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-800 py-2 rounded-full cursor-pointer"
                onClick={() =>
                  dispatch({
                    type: "SET_TERTIARY_COLOR",
                    payload: { name: "tertiary", color: null, scale: [] },
                  })
                }
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
