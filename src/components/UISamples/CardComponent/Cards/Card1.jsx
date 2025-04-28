import React, { useContext } from "react";
import { ColorContext } from "../../../../contexts/colorContext";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";

const Card1 = () => {
  const { state: colorState, isDarkMode } = useContext(ColorContext);

  const backgroundStyle = {
    background: colorState.primaryColor.scale[400],
    backgroundImage: `linear-gradient(180deg, ${colorState.primaryColor.scale[400]} 0%, ${colorState.primaryColor.scale[800]} 100%)`,
  };

  return (
    <div className="rounded-xl border border-neutral-300 dark:border-neutral-600 shadow-sm text-center">
      <div
        className="rounded-t-xl rounded-b-4xl h-44"
        style={backgroundStyle}
      ></div>
      <div className="relative">
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 rounded-full border-4 border-neutral-100 dark:border-neutral-800"
          style={{ backgroundColor: colorState.primaryColor.scale[900] }}
        >
          <img
            className="w-28 rounded-full"
            src="/profile-1.png"
            alt="picture of a man"
          />
        </div>

        <h4
          className="mt-12 mb-0.5 text-2xl font-bold"
          style={{
            color: colorState.secondaryColor.isAdded
              ? colorState.secondaryColor.scale[isDarkMode ? 300 : 800]
              : colorState.primaryColor.scale[isDarkMode ? 50 : 950],
          }}
        >
          Peter Samuel
        </h4>
        <h5 className="text-lg font-semibold mb-4 text-neutral-700/80 dark:text-neutral-200/80">
          Product Design
        </h5>
        <p
          className="text-sm text-neutral-700/70 dark:text-neutral-200/50 mx-4 py-2"
          style={{
            borderTop: `4px solid ${
              colorState.primaryColor.scale[isDarkMode ? 300 : 700]
            }`,
          }}
        >
          I choose the product design track because I love solving visula
          problems using UI/UX designs
        </p>
        <div className="flex justify-center items-center space-x-4 mt-1">
          <FaSquareInstagram
            className="text-xl"
            style={{
              color: colorState.tertiaryColor.isAdded
                ? colorState.tertiaryColor.scale[isDarkMode ? 300 : 700]
                : colorState.secondaryColor.isAdded
                ? colorState.secondaryColor.scale[isDarkMode ? 300 : 700]
                : colorState.primaryColor.scale[isDarkMode ? 300 : 700],
            }}
          />
          <FaSquareXTwitter
            className="text-xl"
            style={{
              color: colorState.tertiaryColor.isAdded
                ? colorState.tertiaryColor.scale[isDarkMode ? 300 : 700]
                : colorState.secondaryColor.isAdded
                ? colorState.secondaryColor.scale[isDarkMode ? 300 : 700]
                : colorState.primaryColor.scale[isDarkMode ? 300 : 700],
            }}
          />
          <FaSquareFacebook
            className="text-xl"
            style={{
              color: colorState.tertiaryColor.isAdded
                ? colorState.tertiaryColor.scale[isDarkMode ? 300 : 700]
                : colorState.secondaryColor.isAdded
                ? colorState.secondaryColor.scale[isDarkMode ? 300 : 700]
                : colorState.primaryColor.scale[isDarkMode ? 300 : 700],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Card1;
