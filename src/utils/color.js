import { hexToHSL, hslToHex } from "./colorConverter";

const generateRandomHexColor = () => {
  const hexString = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  if (hexString.length < 7) return hexString + "0";
  return hexString;
};

const determineBaseScale = (color) => {
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

const generateScale = (color, baseScale) => {
  if (!baseScale) baseScale = determineBaseScale(color);

  const hsl = hexToHSL(color);
  const scaleValues = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  const scales = {};
  const baseIndex = scaleValues.indexOf(baseScale);

  // Base color
  scales[baseScale] = color;

  // For lighter shades
  for (let i = baseIndex - 1; i >= 0; i--) {
    const step = baseIndex - i;
    const adjustedL = Math.min(98, hsl.l + step * 8);
    const adjustedS = Math.max(hsl.s - step * 5, 10);
    scales[scaleValues[i]] = hslToHex(hsl.h, adjustedS, adjustedL);
  }

  // For darker shades
  for (let i = baseIndex + 1; i < scaleValues.length; i++) {
    const step = i - baseIndex;
    const adjustedL = Math.max(5, hsl.l - step * 8);
    const adjustedS = Math.min(hsl.s + step * 2, 100);
    scales[scaleValues[i]] = hslToHex(hsl.h, adjustedS, adjustedL);
  }

  return scales;
};

export { generateRandomHexColor, determineBaseScale, generateScale };
