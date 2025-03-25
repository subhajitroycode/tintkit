import React, { useContext } from "react";
import CustomScaleDropdown from "./CustomScaleDropdown";
import { ColorContext } from "../contexts/colorContext";
import { FaTrash } from "react-icons/fa6";
import { determineBaseScale, generateScale } from "../utils/color";

const ColorInput = ({ colorType = "primary" }) => {
  const { state, dispatch } = useContext(ColorContext);

  const colorData = state[`${colorType}Color`];
  const actionType = `SET_${colorType.toUpperCase()}_COLOR`;

  return (
    <div className="mb-6 p-4 border border-neutral-200 dark:border-neutral-600 rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">
          {colorType.charAt(0).toUpperCase() + colorType.slice(1)} Color
        </h3>
        {colorType !== "primary" && (
          <button
            className="text-red-500 hover:text-red-700 cursor-pointer"
            onClick={() =>
              dispatch({ type: `RESET_${colorType.toUpperCase()}_COLOR` })
            }
          >
            <FaTrash />
          </button>
        )}
      </div>

      <label
        htmlFor={colorType}
        className="block mb-0.5 text-sm font-medium text-neutral-700 dark:text-neutral-300"
      >
        Color Name:
      </label>
      <input
        type="text"
        name={colorType}
        id={colorType}
        className="w-full p-2 border border-neutral-300 dark:border-neutral-500 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-600"
        placeholder="Choose your color name"
        value={colorData.name}
        onChange={(e) => {
          dispatch({
            type: actionType,
            payload: {
              name: e.target.value,
              color: colorData.color,
              scale: colorData.scale,
              baseScale: colorData.baseScale,
            },
          });
        }}
      />
      <div className="mt-4">
        <label
          htmlFor={`${colorType}-color`}
          className="block mb-0.5 text-sm font-medium text-neutral-700 dark:text-neutral-300"
        >
          Choose your color:
        </label>
        <div className="flex items-center pl-2 border focus-within:border-none rounded-md focus-within:outline-2 focus-within:outline-neutral-900 dark:focus-within:outline-neutral-200 border-neutral-300 dark:border-neutral-500 hover:bg-neutral-200 dark:hover:bg-neutral-600">
          <div className="relative w-5 h-5 overflow-hidden rounded-full">
            <input
              type="color"
              id={`${colorType}-color`}
              name={`${colorType}-color`}
              className="absolute top-0.5 left-0 w-8 h-8 -ml-2 -mt-2 rounded-full cursor-pointer"
              value={colorData.color}
              onChange={(e) => {
                dispatch({
                  type: actionType,
                  payload: {
                    name: colorData.name,
                    color: e.target.value,
                    scale: generateScale(e.target.value),
                    baseScale: determineBaseScale(e.target.value),
                  },
                });
              }}
            />
          </div>
          <input
            type="text"
            className="w-full p-2 border-none outline-none"
            placeholder="Enter hex code"
            value={colorData.color}
            onChange={(e) => {
              dispatch({
                type: actionType,
                payload: {
                  name: colorData.name,
                  color: e.target.value,
                  scale: generateScale(e.target.value),
                  baseScale: determineBaseScale(e.target.value),
                },
              });
            }}
          />
        </div>
      </div>
      <CustomScaleDropdown colorType={colorType} />
    </div>
  );
};

export default ColorInput;
