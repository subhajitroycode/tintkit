import { hexToHSL } from "./colorConverter";

const generateRandomHexColor = () => {
  const hexString = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  if (hexString.length < 7) return hexString + "0";
  return hexString;
};

const autoBaseScale = (color) => {
  const { l } = hexToHSL(color);

  if (l < 15) return 950;
  if (l < 25) return 900;
  if (l < 35) return 800;
  if (l < 45) return 700;
  if (l < 55) return 600;
  if (l < 65) return 500;
  if (l < 75) return 400;
  if (l < 85) return 300;
  if (l < 92) return 200;
  if (l < 96) return 100;
  return 50;
};

export { generateRandomHexColor, autoBaseScale };
