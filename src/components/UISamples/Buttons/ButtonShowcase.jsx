import React from "react";
import ButtonContainer from "./ButtonContainer";

const ButtonShowcase = () => {
  const variants = ["Normal", "Soft", "Heavy", "Outline"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {variants.map((variant, index) => (
        <ButtonContainer key={index} variant={variant} />
      ))}
    </div>
  );
};

export default ButtonShowcase;
