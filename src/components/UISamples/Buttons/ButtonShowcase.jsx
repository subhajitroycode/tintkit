import React, { useContext } from "react";
import ButtonContainer from "./ButtonContainer";
import { ColorContext } from "../../../contexts/colorContext";

const ButtonShowcase = () => {
  const { state } = useContext(ColorContext);
  const variants = ["Normal", "Soft", "Heavy", "Outline"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-4">
      {variants.map((variant, index) => (
        <ButtonContainer key={index} variant={variant} />
      ))}
      {state.secondaryColor.isAdded &&
        variants.map((variant, index) => (
          <ButtonContainer
            key={index}
            colorType="secondary"
            variant={variant}
          />
        ))}
      {state.tertiaryColor.isAdded &&
        variants.map((variant, index) => (
          <ButtonContainer key={index} colorType="tertiary" variant={variant} />
        ))}
    </div>
  );
};

export default ButtonShowcase;
