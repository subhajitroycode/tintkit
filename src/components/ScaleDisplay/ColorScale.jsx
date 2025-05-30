import { useContext, useState } from "react";
import { ColorContext } from "../../contexts/colorContext";
import { hexToRGB } from "../../utils/colorConverter";
import { GoHeart } from "react-icons/go";
import { createPortal } from "react-dom";
import ModalComponent from "../Modals/ModalComponent";
import { nanoid } from "nanoid";

const ColorScale = ({ colorType = "primary" }) => {
  const [isCopied, setIsCopied] = useState(null);
  const { scaleValues, state } = useContext(ColorContext);
  const [showModal, setShowModal] = useState(false);
  const colorData = state[`${colorType}Color`];

  const getTextColor = (color) => {
    const { r, g, b } = hexToRGB(color);
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

    return luminance > 0.5 ? "text-neutral-950" : "text-neutral-50";
  };

  return (
    <div className="mb-5">
      <div className="flex justify-between">
        <h3 className="font-medium">
          Color:{" "}
          {colorData.name.trim().slice(0, 1).toUpperCase() +
            colorData.name.trim().slice(1)}
        </h3>
        <button
          className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-neutral-300 cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          Export
        </button>
        {showModal &&
          createPortal(
            <ModalComponent
              onClose={() => setShowModal(false)}
              color={colorType}
            />,
            document.getElementById("portals")
          )}
      </div>
      <div className="grid gap-1.5 xl:grid-cols-11 mt-2">
        {scaleValues.map((scale) => {
          const backgroundColor = colorData.scale[scale];
          const textColor = getTextColor(backgroundColor);

          return (
            <div
              key={nanoid()}
              className={`h-12 xl:h-24 rounded-md flex flex-col justify-center xl:justify-end items-center xl:pb-3 cursor-pointer ${textColor}`}
              style={{ backgroundColor }}
              onClick={() => {
                navigator.clipboard.writeText(backgroundColor);
                setIsCopied(scale);
                setTimeout(() => setIsCopied(null), 1000);
              }}
            >
              {scale === colorData.baseScale && (
                <GoHeart className="text-2xl mb-1 hidden xl:block" />
              )}
              <p
                className={`font-medium text-sm ${
                  isCopied === scale && "hidden"
                }`}
              >
                {scale}
              </p>
              <p className={`text-xs ${isCopied === scale && "hidden"}`}>
                {backgroundColor.toUpperCase()}
              </p>
              {isCopied === scale && <p className="pt-3">Copied!</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ColorScale;
