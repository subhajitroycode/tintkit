import React from "react";
import CustomScaleDropdown from "./CustomScaleDropdown";

const ColorInput = () => {
  return (
    <div>
      <label
        htmlFor="color-name"
        className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
      >
        Color Name:
      </label>
      <input
        type="text"
        name="color-name"
        id="color-name"
        className="w-full p-2 mt-0.5 border border-gray-300 rounded-md"
        placeholder="Enter color name"
      />
      <div className="mt-4">
        <label
          htmlFor="color"
          className="block mb-1 text-sm font-medium text-neutral-700 dark:text-neutral-300"
        >
          Choose your color:
        </label>
        <div className="flex items-center pl-2 border border-neutral-300 focus-within:border-none rounded-md focus-within:outline-2 focus-within:outline-neutral-900 dark:focus-within:outline-neutral-200">
          <div className="relative w-5 h-5 overflow-hidden rounded-full">
            <input
              type="color"
              className="absolute top-0.5 left-0 w-8 h-8 -ml-2 -mt-2 rounded-full cursor-pointer"
            />
          </div>
          <input
            type="text"
            className="w-full p-2 border-none outline-none"
            placeholder="Enter hex code"
          />
        </div>
      </div>
      <CustomScaleDropdown />
      <button className="mt-4 mb-6 w-full bg-neutral-800 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-800 py-2 rounded-full cursor-pointer">
        + Add secondary color
      </button>
    </div>
  );
};

export default ColorInput;
