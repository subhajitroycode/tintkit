import React, { useContext, useEffect, useRef, useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { ColorContext } from "../contexts/colorContext";

const CustomScaleDropdown = ({ colorType = "primary" }) => {
  const [isChevronOpen, setIsChevronOpen] = useState(false);
  const dropdownref = useRef(null);
  const { scaleValues, state, dispatch } = useContext(ColorContext);

  const colorData = state[`${colorType}Color`];
  const actionType = `SET_${colorType.toUpperCase()}_COLOR`;

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        isChevronOpen &&
        dropdownref.current &&
        !dropdownref.current.contains(e.target)
      ) {
        setIsChevronOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isChevronOpen]);

  return (
    <div className="mt-3">
      <label className="block mb-0.5 text-sm font-medium text-neutral-700 dark:text-neutral-300">
        Base Scale Position:
      </label>
      <div className="relative" ref={dropdownref}>
        <button
          type="button"
          className="w-full flex items-center justify-between p-2 bg-transparent border border-neutral-300 dark:border-neutral-500 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-600 focus:outline-2 focus:outline-neutral-900 dark:focus:outline-1 dark:focus:outline-neutral-200"
          onClick={() => setIsChevronOpen(!isChevronOpen)}
        >
          <span>{colorData.baseScale}</span>
          <IoChevronDown
            className={`transition-transform duration-200 ${
              isChevronOpen && "transform rotate-180"
            }`}
          />
        </button>

        {isChevronOpen && (
          <div className="absolute w-full mt-1 bg-white border border-neutral-300 rounded-md shadow-lg dark:bg-neutral-700 dark:border-neutral-600 max-h-60 overflow-auto z-10">
            <div className="grid grid-cols-3 gap-1 p-1">
              {scaleValues.map((value) => (
                <button
                  key={value}
                  className={`px-3 py-2 text-sm text-center rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-600 cursor-pointer ${
                    colorData.baseScale === value
                      ? "bg-neutral-300 dark:bg-neutral-500"
                      : "text-neutral-600 dark:text-neutral-400"
                  }`}
                  onClick={() =>
                    dispatch({
                      type: actionType,
                      payload: {
                        name: colorData.name,
                        color: colorData.color,
                        scale: colorData.scale,
                        baseScale: value,
                      },
                    })
                  }
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <p className="text-xs mt-0.5 text-neutral-500 dark:text-neutral-400">
        Choose another position to override auto-selected base scale.
      </p>
    </div>
  );
};

export default CustomScaleDropdown;
