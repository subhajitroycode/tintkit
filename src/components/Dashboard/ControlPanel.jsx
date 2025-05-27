import { useContext, useEffect, useRef, useState } from "react";
import ColorInput from "./ColorInput";
import { ColorContext } from "../../contexts/colorContext";
import {
  determineBaseScale,
  generateRandomHexColor,
  generateScale,
} from "../../utils/color";
import { FaChevronDown } from "react-icons/fa";

const ControlPanel = () => {
  const { state, dispatch } = useContext(ColorContext);
  const [isOpen, setisOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        isOpen
      ) {
        setisOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

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
    <div className="md:max-w-96 md:ml-6 relative" ref={inputRef}>
      <div className="hidden md:block mb-4">
        <h1 className="text-3xl font-display">Color Scales Generator</h1>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:pr-1">
          Create beautiful and customizable color scales for your design
          projects effortlessly.
        </p>
      </div>

      {/* For mobile screen */}
      <button
        className="md:hidden w-full bg-neutral-800 dark:bg-neutral-700 text-white p-4 flex items-center justify-between hover:bg-neutral-700 transition-colors duration-200 focus:outline-none mb-2"
        onClick={() => setisOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Toggle color input panel"
      >
        <span className="text-lg font-medium">Add/Edit colors</span>
        <FaChevronDown
          className={`transition-transform duration-300 ease-in-out ${
            isOpen && "rotate-180"
          }`}
        />
      </button>

      <div
        className={`md:max-h-[55vh] overflow-y-auto md:pr-2 text-center absolute md:static top-full left-0 w-full md:w-auto z-30 bg-neutral-200 dark:bg-neutral-600 md:bg-transparent md:dark:bg-transparent transition-all duration-300 ease-in-out md:opacity-100 ${
          isOpen ? "max-h-[55vh] p-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ColorInput />
        {state.secondaryColor.isAdded ? (
          <ColorInput colorType="secondary" />
        ) : (
          <button
            className="mb-6 w-10/12 md:w-full bg-neutral-800 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-800 py-2 rounded-full cursor-pointer hover:bg-neutral-700 dark:hover:bg-neutral-300 font-medium"
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
                className="-mt-2 mb-6 w-10/12 md:w-full bg-neutral-800 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-800 py-2 rounded-full cursor-pointer hover:bg-neutral-700 dark:hover:bg-neutral-300 font-medium"
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
