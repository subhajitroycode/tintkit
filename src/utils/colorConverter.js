export const convertHexLength = (hex) => {
  return hex
    .split("")
    .map((char) => char + char)
    .join("");
};

export const hexToRGB = (hex) => {
  hex = hex.replace(/^#/, "");
  if (hex.length === 3) hex = convertHexLength(hex);

  let r = parseInt(hex.substring(0, 2), 16) / 255;
  let g = parseInt(hex.substring(2, 4), 16) / 255;
  let b = parseInt(hex.substring(4, 6), 16) / 255;

  return { r, g, b };

  // const num = parseInt(hex, 16);
  // return { r: num >> 16, g: (num >> 8) & 255, b: num & 255 };
};

export const hexToHSL = (hex) => {
  hex = hex.replace(/^#/, "");
  if (hex.length === 3) hex = convertHexLength(hex);

  const { r, g, b } = hexToRGB(hex);

  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        break;
    }

    h /= 6;
  }

  return { h: h * 360, s: s * 100, l: l * 100 };
};

export const hslToHex = (h, s, l) => {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
};
