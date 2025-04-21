import React, { useContext } from "react";
import { ColorContext } from "../../../../contexts/colorContext";

const Card6 = () => {
  const { state: colorState } = useContext(ColorContext);

  const bgStyle = {
    background: colorState.primaryColor.scale[200],
    backgroundImage: `linear-gradient(to bottom right, ${colorState.primaryColor.scale[200]} 10%, ${colorState.primaryColor.scale[500]} 50%, ${colorState.primaryColor.scale[900]} 100%)`,
  };

  return (
    <div
      className="rounded-xl border border-neutral-300 dark:border-neutral-600 shadow-sm overflow-hidden"
      style={bgStyle}
    >
      <div className="flex flex-col items-center justify-center space-y-6">
        <h4
          className="text-3xl font-bold mt-4"
          style={{ color: colorState.primaryColor.scale[950] }}
        >
          ASUS Zenbook A14
        </h4>
        <img
          src="/product-2.png"
          alt="image of asus zenbook a14 laptop"
          className="w-64 h-auto object-contain drop-shadow-lg"
        />
        <button className="font-semibold px-6 py-2 rounded-full bg-neutral-50 dark:bg-neutral-800">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Card6;
