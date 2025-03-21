import { createContext, useReducer, useState } from "react";

const ColorContext = createContext();

const initialState = {
  primaryColor: {
    name: "primary",
    color: null,
    scale: [],
  },
  secondaryColor: {
    name: "secondary",
    color: null,
    scale: [],
    isAdded: false,
  },
  tertiaryColor: {
    name: "tertiary",
    color: null,
    scale: [],
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
        },
      };
    case "SET_SECONDARY_COLOR":
      return {
        ...state,
        secondaryColor: {
          name: action.payload.name,
          color: action.payload.color,
          scale: action.payload.scale,
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
          isAdded: true,
        },
      };
    case "RESET_SECONDARY_COLOR":
      return {
        ...state,
        secondaryColor: {
          name: "secondary",
          color: null,
          scale: [],
          isAdded: false,
        },
      };
    case "RESET_TERTIARY_COLOR":
      return {
        ...state,
        tertiaryColor: {
          name: "tertiary",
          color: null,
          scale: [],
          isAdded: false,
        },
      };
    default:
      return state;
  }
};

const ColorProvider = ({ children }) => {
  const scaleValues = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  const [baseScale, setBaseScale] = useState(null);
  const [state, dispatch] = useReducer(reduce, initialState);

  return (
    <ColorContext.Provider
      value={{ scaleValues, baseScale, setBaseScale, state, dispatch }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export { ColorProvider, ColorContext };
