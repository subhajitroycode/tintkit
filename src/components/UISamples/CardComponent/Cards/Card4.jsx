import React, { useContext } from "react";
import { ColorContext } from "../../../../contexts/colorContext";

const Card4 = () => {
  const { state: colorState, isDarkMode } = useContext(ColorContext);

  const tagStyle = {
    backgroundColor: colorState.tertiaryColor.isAdded
      ? colorState.tertiaryColor.scale[100]
      : colorState.secondaryColor.isAdded
      ? colorState.secondaryColor.scale[100]
      : colorState.primaryColor.scale[100],
    color: colorState.tertiaryColor.isAdded
      ? colorState.tertiaryColor.scale[700]
      : colorState.secondaryColor.isAdded
      ? colorState.secondaryColor.scale[700]
      : colorState.primaryColor.scale[700],
  };

  return (
    <div
      className="rounded-xl border border-neutral-300 dark:border-neutral-600 shadow-sm overflow-hidden"
      style={{
        backgroundColor: colorState.primaryColor.scale[isDarkMode ? 950 : 50],
      }}
    >
      <div className="relative">
        <img src="/profile-3.png" alt="Traditional Woman in Saree" />
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <span
            className="px-2 py-1 text-xs rounded font-medium cursor-default"
            style={tagStyle}
          >
            Bridal
          </span>
          <span
            className="px-2 py-1 text-xs rounded font-medium cursor-default"
            style={tagStyle}
          >
            Traditional
          </span>
          <span
            className="px-2 py-1 text-xs rounded font-medium cursor-default"
            style={tagStyle}
          >
            Jewelry
          </span>
        </div>
      </div>
      <div className="p-4">
        <h4
          className="text-2xl font-semibold mb-2"
          style={{
            color: colorState.primaryColor.scale[isDarkMode ? 100 : 900],
          }}
        >
          Grace in Tradition
        </h4>
        <p
          className="text-sm mb-2"
          style={{
            color: colorState.primaryColor.scale[isDarkMode ? 300 : 700],
          }}
        >
          A stunning portrayal of timeless elegance in a pastel silk saree,
          complemented by intricate jewelry and floral hair adornment.
        </p>
        <button
          className="mt-2 text-sm font-medium px-4 py-2 rounded-lg text-white transition duration-200"
          style={{
            backgroundColor: colorState.secondaryColor.isAdded
              ? colorState.secondaryColor.scale[isDarkMode ? 700 : 500]
              : colorState.primaryColor.scale[isDarkMode ? 700 : 500],
          }}
        >
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Card4;
