import React, { useContext } from "react";
import { ColorContext } from "../../../contexts/colorContext";
import { hexToRGB } from "../../../utils/colorConverter";

const Button = ({ variant, state, colorType = "primary" }) => {
  const { state: colorState } = useContext(ColorContext);
  const colorScale = colorState[`${colorType}Color`].scale;

  const hexToRgba = (hex, alpha) => {
    const { r, g, b } = hexToRGB(hex);

    return `rgba(${r * 255}, ${g * 255}, ${b * 255}, ${alpha})`;
  };

  const DISABLED_STYLE = {
    backgroundColor: colorScale[100],
    textColor: colorScale[400],
    shadow: "",
    border: "none",
  };

  const BUTTON_STYLES = {
    Normal: {
      Default: {
        backgroundColor: colorScale[500],
        textColor: "white",
        shadow: "",
        border: "none",
      },
      Hover: {
        backgroundColor: colorScale[600],
        textColor: "white",
        shadow: "",
        border: "none",
      },
      Active: {
        backgroundColor: colorScale[700],
        textColor: "white",
        shadow: "",
        border: "none",
      },
      Disabled: DISABLED_STYLE,
    },
    Soft: {
      Default: {
        backgroundColor: colorScale[200],
        textColor: colorScale[950],
        shadow: "",
        border: "none",
      },
      Hover: {
        backgroundColor: colorScale[300],
        textColor: colorScale[950],
        shadow: "",
        border: "none",
      },
      Active: {
        backgroundColor: colorScale[400],
        textColor: colorScale[950],
        shadow: "",
        border: "none",
      },
      Disabled: DISABLED_STYLE,
    },
    Heavy: {
      Default: {
        backgroundColor: `linear-gradient(180deg, ${colorScale[600]} 0%, ${colorScale[700]} 100%)`,
        textColor: "",
        shadow: `0px 2px 0px 0px inset ${hexToRgba(
          colorScale[50],
          0.25
        )}, 0px 2px 4px 0px ${hexToRgba(colorScale[700], 0.5)}`,
        border: `1px solid ${colorScale[700]}`,
      },
      Hover: {
        backgroundColor: `linear-gradient(180deg, ${colorScale[700]} 0%, ${colorScale[800]} 100%)`,
        textColor: "",
        shadow: `0px 2px 0px 0px inset ${hexToRgba(
          colorScale[50],
          0.25
        )}, 0px 2px 4px 0px ${hexToRgba(colorScale[800], 0.5)}`,
        border: `1px solid ${colorScale[800]}`,
      },
      Active: {
        backgroundColor: `linear-gradient(180deg, ${colorScale[800]} 0%, ${colorScale[900]} 100%)`,
        textColor: "",
        shadow: `0px 2px 0px 0px inset ${hexToRgba(
          colorScale[50],
          0.25
        )}, 0px 2px 4px 0px ${hexToRgba(colorScale[700], 0.5)}`,
        border: `1px solid ${colorScale[900]}`,
      },
      Disabled: DISABLED_STYLE,
    },
    Outline: {
      Default: {
        backgroundColor: "transparent",
        textColor: colorScale[600],
        shadow: "",
        border: `1px solid ${colorScale[500]}`,
      },
      Hover: {
        backgroundColor: colorScale[100],
        textColor: colorScale[700],
        shadow: "",
        border: `1px solid ${colorScale[600]}`,
      },
      Active: {
        backgroundColor: colorScale[200],
        textColor: colorScale[800],
        shadow: "",
        border: `1px solid ${colorScale[700]}`,
      },
      Disabled: {
        backgroundColor: "transparent",
        textColor: colorScale[300],
        shadow: "",
        border: `1px solid ${colorScale[200]}`,
      },
    },
  };

  const styleConfig = BUTTON_STYLES[variant]?.[state];

  const style = {
    background: styleConfig.backgroundColor,
    color: styleConfig.textColor,
    border: styleConfig.border,
    boxShadow: styleConfig.shadow,
  };

  return (
    <button
      style={style}
      className="py-3 px-6 rounded-md font-medium w-full text-white"
    >
      {state}
    </button>
  );
};

export default Button;
