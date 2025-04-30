import React, { useContext } from "react";
import { ColorContext } from "../../../../contexts/colorContext";
import { FiLoader } from "react-icons/fi";

const Card3 = () => {
  const { state: colorState, isDarkMode } = useContext(ColorContext);

  const bgStyle = {
    background: colorState.primaryColor.scale[200],
    backgroundImage: `linear-gradient(180deg, ${
      colorState.secondaryColor.isAdded
        ? colorState.secondaryColor.scale[isDarkMode ? 300 : 100]
        : colorState.primaryColor.scale[isDarkMode ? 500 : 100]
    } 20%, ${colorState.primaryColor.scale[isDarkMode ? 900 : 400]} 100%)`,
  };

  return (
    <div
      className="rounded-xl border border-neutral-300 dark:border-neutral-600 shadow-sm overflow-hidden"
      style={bgStyle}
    >
      <div className="bg-[url(/profile-2.png)] bg-no-repeat bg-top bg-cover h-full w-full text-center">
        <h4
          className="mt-8 mb-2.5 text-3xl font-bold"
          style={{
            color: colorState.secondaryColor.isAdded
              ? colorState.secondaryColor.scale[700]
              : colorState.primaryColor.scale[isDarkMode ? 50 : 950],
          }}
        >
          Louisa Marin
        </h4>
        <p
          style={{
            color: colorState.tertiaryColor.scale[isDarkMode ? 100 : 800],
          }}
        >
          <FiLoader className="inline-block mr-1" />
          <span>Connecting</span>
        </p>
        <div className="mt-56 flex justify-between items-center px-4 py-7 text-white">
          <div className="flex items-center gap-1.5">
            <img
              src="/profile-2-user.png"
              alt="profile picture of the user"
              className="w-10 h-10 rounded-full"
            />
            <div className="text-left">
              <p className="font-semibold text-xs">louisa_marin01</p>
              <p className="text-[10px] text-neutral-100/80">23m ago</p>
            </div>
          </div>
          <div>
            <button className="bg-white/30 backdrop-blur-sm px-4 py-2 rounded-4xl inset-shadow-2xs inset-shadow-white/50 font-medium text-sm">
              + Add Member
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
