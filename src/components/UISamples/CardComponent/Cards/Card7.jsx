import React, { useContext } from "react";
import { ColorContext } from "../../../../contexts/colorContext";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Card7 = () => {
  const { state: colorState, isDarkMode } = useContext(ColorContext);

  const bgStyle = {
    background: colorState.primaryColor.scale[200],
    backgroundImage: `linear-gradient(to bottom, ${
      colorState.primaryColor.scale[isDarkMode ? 700 : 300]
    } 0%, ${isDarkMode ? "#18181B" : "#FAFAFA"} 40%)`,
  };

  return (
    <div
      className="rounded-xl border border-neutral-300 dark:border-neutral-600 shadow-sm overflow-hidden"
      style={bgStyle}
    >
      <div className="m-4">
        <img
          src="/profile-4.png"
          alt="a walking walking thorugh the forest"
          className="rounded-xl"
        />
        <h4 className="text-4xl font-bold text-neutral-700 dark:text-neutral-200 mb-4">
          <span
            className="text-base block my-3 text-neutral-800/50 dark:text-neutral-200/50"
            style={{
              color: colorState.tertiaryColor.scale[isDarkMode ? 300 : 800],
            }}
          >
            26.11.2022
          </span>
          Down The Rabbit Hole
        </h4>
        <hr className="text-neutral-400" />
        <div className="flex justify-between items-center mt-4">
          <p
            className="font-semibold underline cursor-pointer"
            style={{
              color: colorState.secondaryColor.isAdded
                ? colorState.secondaryColor.scale[isDarkMode ? 400 : 700]
                : colorState.primaryColor.scale[isDarkMode ? 400 : 700],
            }}
          >
            Read more
          </p>
          <div
            className="text-2xl rounded-full p-1 text-white"
            style={{
              backgroundColor: colorState.secondaryColor.isAdded
                ? colorState.secondaryColor.scale[400]
                : colorState.primaryColor.scale[400],
            }}
          >
            <MdOutlineKeyboardDoubleArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card7;
