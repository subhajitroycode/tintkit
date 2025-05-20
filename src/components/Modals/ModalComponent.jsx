import { useState, useContext, useRef, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { ColorContext } from "../../contexts/colorContext";
import { nanoid } from "nanoid";
import { IoMdArrowDropdown, IoMdCheckmark } from "react-icons/io";
import { hexToHSL, hexToOKLCH, hexToRGB } from "../../utils/colorConverter";

const ModalComponent = ({ onClose, color = "all" }) => {
  const { state: colorState } = useContext(ColorContext);
  const [copyStatus, setCopyStatus] = useState("Copy");
  const [activeTab, setActiveTab] = useState("tailwind");
  const [tailwindVersion, setTailwindVersion] = useState("v4");
  const [showTailwindDropdown, setShowTailwindDropdown] = useState(false);
  const [selectedColor, setSelectedColor] = useState(
    color === "all" ? "primary" : color
  );
  const [showAllColors, setShowAllColors] = useState(color === "all");
  const [code, setCode] = useState("hex");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setShowTailwindDropdown(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOuterClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const getAvailableColorTypes = () => {
    const colorTypes = ["primary"];
    if (colorState.secondaryColor.isAdded) colorTypes.push("secondary");
    if (colorState.tertiaryColor.isAdded) colorTypes.push("tertiary");

    return colorTypes;
  };

  const colorTypes = getAvailableColorTypes();

  const getColorScale = (colorType) => {
    return colorState[`${colorType}Color`].scale || {};
  };

  const generateFormattedColors = () => {
    // If showing all colors
    if (showAllColors) {
      if (activeTab === "tailwind") {
        if (tailwindVersion === "v4") {
          return colorTypes
            .map((colorType) => {
              const scale = getColorScale(colorType);
              return Object.entries(scale)
                .map(([shade, value]) => {
                  if (code === "rgb") {
                    const { r, g, b } = hexToRGB(value);
                    console.log(r * 255, g * 255, b * 255);

                    return `--color-${colorType}-${shade}: rgb(${r * 255}, ${
                      g * 255
                    }, ${b * 255});`;
                  } else if (code === "hsl") {
                    const { h, s, l } = hexToHSL(value);
                    return `--color-${colorType}-${shade}: hsl(${Math.round(
                      h
                    )}, ${Math.round(s)}%, ${Math.round(l)}%);`;
                  } else if (code === "oklch") {
                    const { l, c, h } = hexToOKLCH(value);
                    return `--color-${colorType}-${shade}: oklch(${l} ${c} ${h});`;
                  } else return `--color-${colorType}-${shade}: ${value};`;
                })
                .join("\n");
            })
            .join("\n\n");
        } else {
          return colorTypes
            .map((colorType) => {
              const scale = getColorScale(colorType);
              return `'${colorType}': {\n${Object.entries(scale)
                .map(([shade, value]) => {
                  if (code === "rgb") {
                    const { r, g, b } = hexToRGB(value);
                    return `    '${shade}': 'rgb(${r * 255}, ${g * 255}, ${
                      b * 255
                    })',`;
                  } else if (code === "hsl") {
                    const { h, s, l } = hexToHSL(value);
                    return `    '${shade}': 'hsl(${Math.round(h)}, ${Math.round(
                      s
                    )}%, ${Math.round(l)}%)',`;
                  } else if (code === "oklch") {
                    const { l, c, h } = hexToOKLCH(value);
                    return `    '${shade}': 'oklch(${l} ${c} ${h})',`;
                  } else return `    '${shade}': '${value}',`;
                })
                .join("\n")}\n},`;
            })
            .join("\n\n");
        }
      } else if (activeTab === "css") {
        return `:root {\n${colorTypes
          .map((colorType) => {
            const scale = getColorScale(colorType);
            return Object.entries(scale)
              .map(([shade, value]) => {
                if (code === "rgb") {
                  const { r, g, b } = hexToRGB(value);
                  return `  --color-${colorType}-${shade}: rgb(${r * 255}, ${
                    g * 255
                  }, ${b * 255});`;
                } else if (code === "hsl") {
                  const { h, s, l } = hexToHSL(value);
                  return `  --color-${colorType}-${shade}: hsl(${Math.round(
                    h
                  )}, ${Math.round(s)}%, ${Math.round(l)}%);`;
                } else if (code === "oklch") {
                  const { l, c, h } = hexToOKLCH(value);
                  return `  --color-${colorType}-${shade}: oklch(${l} ${c} ${h});`;
                } else return `  --color-${colorType}-${shade}: ${value};`;
              })
              .join("\n");
          })
          .join("\n\n")}\n}`;
      }
    }
    // If showing a single color
    else {
      const scale = getColorScale(selectedColor);

      if (activeTab === "tailwind") {
        if (tailwindVersion === "v4") {
          return Object.entries(scale)
            .map(([shade, value]) => {
              if (code === "rgb") {
                const { r, g, b } = hexToRGB(value);
                console.log(r * 255, g * 255, b * 255);

                return `--color-${selectedColor}-${shade}: rgb(${r * 255}, ${
                  g * 255
                }, ${b * 255});`;
              } else if (code === "hsl") {
                const { h, s, l } = hexToHSL(value);
                return `--color-${selectedColor}-${shade}: hsl(${Math.round(
                  h
                )}, ${Math.round(s)}%, ${Math.round(l)}%);`;
              } else if (code === "oklch") {
                const { l, c, h } = hexToOKLCH(value);
                return `--color-${selectedColor}-${shade}: oklch(${l} ${c} ${h});`;
              } else return `--color-${selectedColor}-${shade}: ${value};`;
            })
            .join("\n");
        } else {
          return `'${selectedColor}': {\n${Object.entries(scale)
            .map(([shade, value]) => {
              if (code === "rgb") {
                const { r, g, b } = hexToRGB(value);
                return `    '${shade}': 'rgb(${r * 255}, ${g * 255}, ${
                  b * 255
                })',`;
              } else if (code === "hsl") {
                const { h, s, l } = hexToHSL(value);
                return `    '${shade}': 'hsl(${Math.round(h)}, ${Math.round(
                  s
                )}%, ${Math.round(l)}%)',`;
              } else if (code === "oklch") {
                const { l, c, h } = hexToOKLCH(value);
                return `    '${shade}': 'oklch(${l} ${c} ${h})',`;
              } else return `    '${shade}': '${value}',`;
            })
            .join("\n")}\n},`;
        }
      } else if (activeTab === "css") {
        return `:root {\n${Object.entries(scale)
          .map(([shade, value]) => {
            if (code === "rgb") {
              const { r, g, b } = hexToRGB(value);
              return `  --color-${selectedColor}-${shade}: rgb(${r * 255}, ${
                g * 255
              }, ${b * 255});`;
            } else if (code === "hsl") {
              const { h, s, l } = hexToHSL(value);
              return `  --color-${selectedColor}-${shade}: hsl(${Math.round(
                h
              )}, ${Math.round(s)}%, ${Math.round(l)}%);`;
            } else if (code === "oklch") {
              const { l, c, h } = hexToOKLCH(value);
              return `  --color-${selectedColor}-${shade}: oklch(${l} ${c} ${h});`;
            } else return `  --color-${selectedColor}-${shade}: ${value};`;
          })
          .join("\n")}\n}`;
      }
    }

    return "";
  };

  const handleCopyToClipboard = () => {
    const formattedColors = generateFormattedColors();
    navigator.clipboard.writeText(formattedColors).then(
      () => {
        setCopyStatus("Copied!");
        setTimeout(() => setCopyStatus("Copy"), 2000);
      },
      () => {
        setCopyStatus("Failed to copy");
        setTimeout(() => setCopyStatus("Copy"), 2000);
      }
    );
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-neutral-700/50 z-40 backdrop-blur-sm flex items-center justify-center"
      onClick={handleOuterClick}
    >
      <div className="bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-50 z-50 w-full max-w-lg rounded-lg shadow-lg absolute top-1/2 left-1/2  transform -translate-1/2">
        <div className="flex justify-between items-center border-b border-neutral-300 dark:border-neutral-700 p-4">
          <h4 className="font-medium">Export Color Scales</h4>
          <button
            onClick={onClose}
            className="hover:bg-neutral-200 dark:hover:bg-neutral-700 p-1 rounded-full"
          >
            <IoCloseOutline className="text-xl" />
          </button>
        </div>

        <div className="p-4">
          <div className="flex mb-4">
            <div className="relative" ref={dropdownRef}>
              <div className="flex items-center">
                <button
                  className={`py-2 pl-2.5 pr-1.5 flex items-center gap-1 rounded-l-lg cursor-pointer ${
                    activeTab === "tailwind"
                      ? "bg-neutral-700 text-white font-medium dark:bg-neutral-300 dark:text-neutral-900"
                      : "bg-neutral-300 dark:bg-neutral-700"
                  }`}
                  onClick={() => {
                    setActiveTab("tailwind");
                  }}
                >
                  Tailwind {tailwindVersion}
                </button>
                <button
                  className={`h-10 w-6 rounded-r-lg flex justify-center items-center border-neutral-400 ${
                    activeTab === "tailwind"
                      ? "bg-neutral-800 text-white dark:bg-neutral-300 dark:text-neutral-900 border-l"
                      : "bg-neutral-300 border-l dark:bg-neutral-700 dark:border-neutral-500"
                  }`}
                  onClick={() => setShowTailwindDropdown((prev) => !prev)}
                >
                  <IoMdArrowDropdown
                    className={`transition-transform ${
                      showTailwindDropdown && "rotate-180"
                    }`}
                  />
                </button>
              </div>

              {showTailwindDropdown && (
                <div className="absolute top-full left-0 bg-white dark:bg-neutral-700 shadow-lg rounded-md z-10 min-w-[130px] mt-1">
                  <button
                    className="w-full px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-600 flex justify-between items-center rounded-t-md"
                    onClick={() => {
                      setTailwindVersion("v4");
                      setShowTailwindDropdown(false);
                    }}
                  >
                    <span>v4</span>
                    {tailwindVersion === "v4" && <IoMdCheckmark />}
                  </button>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-600 flex justify-between items-center rounded-b-md"
                    onClick={() => {
                      setTailwindVersion("v3");
                      setShowTailwindDropdown(false);
                    }}
                  >
                    <span>v3</span>
                    {tailwindVersion === "v3" && <IoMdCheckmark />}
                  </button>
                </div>
              )}
            </div>

            <button
              className={`px-4 py-2 ml-2 rounded-lg cursor-pointer ${
                activeTab === "css"
                  ? "bg-neutral-700 text-white font-medium dark:bg-neutral-300 dark:text-neutral-900"
                  : "bg-neutral-300 dark:bg-neutral-700"
              }`}
              onClick={() => {
                setActiveTab("css");
                setShowTailwindDropdown(false);
              }}
            >
              CSS
            </button>
          </div>

          {colorTypes.length > 1 && (
            <div className="mb-4 flex justify-between items-center">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={showAllColors}
                  onChange={() => setShowAllColors(!showAllColors)}
                  className="form-checkbox h-4 w-4 text-blue-500"
                />
                <span className="ml-2 text-sm">Export all color scales</span>
              </label>

              {/* Color selector - only show if not exporting all */}
              {!showAllColors && colorTypes.length > 0 && (
                <div className="flex bg-neutral-300 dark:bg-neutral-700 rounded-full">
                  {colorTypes.map((colorType) => (
                    <button
                      key={nanoid()}
                      className={`py-1 px-1.5 first:rounded-l-full first:pl-2.5 first:border-r last:rounded-r-full last:pr-2.5 last:border-l text-sm border-neutral-500/50 border-none outline-none ${
                        selectedColor === colorType &&
                        "bg-neutral-700 text-neutral-100 dark:bg-neutral-300 dark:text-neutral-900 font-medium"
                      }`}
                      onClick={() => setSelectedColor(colorType)}
                    >
                      {colorType.charAt(0).toUpperCase() + colorType.slice(1)}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="flex gap-2 mb-2 text-neutral-400 dark:text-neutral-500">
            <button
              className={`text-sm cursor-pointer ${
                code === "hex" &&
                "text-neutral-900 dark:text-neutral-100 font-medium"
              }`}
              onClick={() => setCode("hex")}
            >
              HEX
            </button>
            <button
              className={`text-sm cursor-pointer ${
                code === "rgb" &&
                "text-neutral-900 dark:text-neutral-100 font-medium"
              }`}
              onClick={() => setCode("rgb")}
            >
              RGB
            </button>
            <button
              className={`text-sm cursor-pointer ${
                code === "hsl" &&
                "text-neutral-900 dark:text-neutral-100 font-medium"
              }`}
              onClick={() => setCode("hsl")}
            >
              HSL
            </button>
            <button
              className={`text-sm cursor-pointer ${
                code === "oklch" &&
                "text-neutral-900 dark:text-neutral-100 font-medium"
              }`}
              onClick={() => setCode("oklch")}
            >
              OKLCH
            </button>
          </div>

          <div className="relative">
            <pre className="bg-neutral-200 dark:bg-neutral-900 p-4 rounded-md overflow-x-auto whitespace-pre text-sm font-mono max-h-60">
              {generateFormattedColors()}
            </pre>

            <button
              className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-xs cursor-pointer"
              onClick={handleCopyToClipboard}
            >
              {copyStatus}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
