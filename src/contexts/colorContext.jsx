import { createContext, useReducer, useState } from "react";
import {
  autoBaseScale,
  generateRandomHexColor,
  generateScale,
} from "../utils/color";

const ColorContext = createContext();

const primaryHexColor = generateRandomHexColor();
const primaryBaseScale = autoBaseScale(primaryHexColor);

const initialState = {
  primaryColor: {
    name: "primary",
    color: primaryHexColor,
    scale: generateScale(primaryHexColor),
    baseScale: primaryBaseScale,
  },
  secondaryColor: {
    name: "secondary",
    color: "",
    scale: [],
    baseScale: undefined,
    isAdded: false,
  },
  tertiaryColor: {
    name: "tertiary",
    color: "",
    scale: [],
    baseScale: undefined,
    isAdded: false,
  },
};

const reduce = (state, action) => {
  switch (action.type) {
    case "SET_PRIMARY_COLOR":
      return {
        ...state,
        primaryColor: {
          name: action.payload.name,
          color: action.payload.color,
          scale: action.payload.scale,
          baseScale: action.payload.baseScale,
        },
      };
    case "SET_SECONDARY_COLOR":
      return {
        ...state,
        secondaryColor: {
          name: action.payload.name,
          color: action.payload.color,
          scale: action.payload.scale,
          baseScale: action.payload.baseScale,
          isAdded: true,
        },
      };
    case "SET_TERTIARY_COLOR":
      return {
        ...state,
        tertiaryColor: {
          name: action.payload.name,
          color: action.payload.color,
          scale: action.payload.scale,
          baseScale: action.payload.baseScale,
          isAdded: true,
        },
      };
    case "RESET_SECONDARY_COLOR":
      if (state.tertiaryColor.isAdded) {
        return {
          ...state,
          secondaryColor: {
            ...state.tertiaryColor,
            name: state.tertiaryColor.name,
          },
          tertiaryColor: {
            name: "tertiary",
            color: "",
            scale: [],
            baseScale: undefined,
            isAdded: false,
          },
        };
      } else {
        return {
          ...state,
          secondaryColor: {
            name: "secondary",
            color: "",
            scale: [],
            baseScale: undefined,
            isAdded: false,
          },
        };
      }
    case "RESET_TERTIARY_COLOR":
      return {
        ...state,
        tertiaryColor: {
          name: "tertiary",
          color: "",
          scale: [],
          baseScale: undefined,
          isAdded: false,
        },
      };
    default:
      return state;
  }
};

const ColorProvider = ({ children }) => {
  const scaleValues = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  const [state, dispatch] = useReducer(reduce, initialState);

  return (
    <ColorContext.Provider value={{ scaleValues, state, dispatch }}>
      {children}
    </ColorContext.Provider>
  );
};

export { ColorProvider, ColorContext };
