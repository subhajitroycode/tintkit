import React from "react";
import Button from "./Button";

const ButtonContainer = ({ variant, colorType }) => {
  const buttons = ["Default", "Hover", "Active", "Disabled"];

  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <h3 className="font-medium space-y-4 mb-4">Buttons · {variant}</h3>
      <div className="flex flex-col space-y-4">
        {buttons.map((state) => (
          <Button
            key={state}
            colorType={colorType}
            variant={variant}
            state={state}
          />
        ))}
      </div>
    </div>
  );
};

export default ButtonContainer;
