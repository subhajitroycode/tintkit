import React, { useContext } from "react";
import { ColorContext } from "../../../../contexts/colorContext";
import { MdOutlineShoppingCart } from "react-icons/md";

const Card2 = () => {
  const { state: colorState, isDarkMode } = useContext(ColorContext);

  console.log(isDarkMode);

  return (
    <div
      className="col-span-2 rounded-xl border border-neutral-300 dark:border-neutral-600 shadow-sm h-full flex"
      style={{
        backgroundColor: colorState.secondaryColor.isAdded
          ? colorState.secondaryColor.scale[isDarkMode ? 900 : 100]
          : colorState.primaryColor.scale[isDarkMode ? 900 : 100],
      }}
    >
      <div className="h-full w-2/5 rounded-tl-xl rounded-bl-xl bg-[url(/product-1.png)] bg-no-repeat bg-center bg-cover"></div>
      <div className="w-3/5 p-7">
        <h4
          className="tracking-[0.3rem] text-neutral-700/80 dark:text-neutral-200/50 text-sm"
          style={{
            color:
              colorState.tertiaryColor.isAdded &&
              colorState.tertiaryColor.scale[300],
          }}
        >
          PERFUME
        </h4>
        <h5
          className="font-product text-3xl py-5 w-[22rem]"
          style={{
            color: colorState.secondaryColor.isAdded
              ? colorState.primaryColor.scale[isDarkMode ? 300 : 900]
              : colorState.primaryColor.scale[isDarkMode ? 100 : 900],
          }}
        >
          Gabrielle Essence Eau De Parfum
        </h5>
        <p className="w-80 text-neutral-700/90 dark:text-neutral-200/80">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <p
          className="my-6 font-product text-3xl"
          style={{
            color: colorState.secondaryColor.isAdded
              ? colorState.primaryColor.scale[isDarkMode ? 400 : 800]
              : colorState.primaryColor.scale[isDarkMode ? 200 : 800],
          }}
        >
          $149.99{" "}
          <span className="font-body text-sm text-neutral-900/70 dark:text-neutral-200 line-through pl-2">
            $169.99
          </span>
        </p>
        <button
          className="w-full py-3.5 rounded-xl font-semibold"
          style={{
            backgroundColor: colorState.tertiaryColor.isAdded
              ? colorState.tertiaryColor.scale[isDarkMode ? 200 : 800]
              : colorState.secondaryColor.isAdded
              ? colorState.secondaryColor.scale[isDarkMode ? 200 : 800]
              : colorState.primaryColor.scale[isDarkMode ? 200 : 800],
            color: colorState.primaryColor.scale[isDarkMode ? 950 : 50],
          }}
        >
          <MdOutlineShoppingCart className="inline-block mr-2" />
          <span className="text-sm">Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default Card2;
