import React, { useContext } from "react";
import CustomScaleDropdown from "./CustomScaleDropdown";
import { ColorContext } from "../contexts/colorContext";

const ColorInput = ({ colorType = "primary" }) => {
  const { state, dispatch } = useContext(ColorContext);

  const colorData = state[`${colorType}Color`];
  const actionType = `SET_${colorType.toUpperCase()}_COLOR`;

  return (
    <div className="mb-10">
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
        className="w-full p-2 border border-gray-300 rounded-md"
        placeholder="Enter color name"
        value={colorData.name}
        onChange={(e) => {
          dispatch({
            type: actionType,
            payload: {
              name: e.target.value,
              color: colorData.color,
              scale: colorData.scale,
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
        <div className="flex items-center pl-2 border border-neutral-300 focus-within:border-none rounded-md focus-within:outline-2 focus-within:outline-neutral-900 dark:focus-within:outline-neutral-200">
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
                    scale: colorData.scale,
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
                  scale: colorData.scale,
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
