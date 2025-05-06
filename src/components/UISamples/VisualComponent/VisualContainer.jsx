import React from "react";
import { Visual1, Visual2 } from "./Visuals";

const VisualContainer = () => {
  return (
    <div className="mx-4 grid grid-cols-3 grid-rows-2 gap-6 h-[55rem]">
      <Visual1 />
      <Visual2 />
      <div className="bg-neutral-200 dark:bg-neutral-700/50 rounded-md shadow-md p-4">
        Visualization 3
      </div>
      <div className="bg-neutral-200 dark:bg-neutral-700/50 rounded-md shadow-md p-4">
        Visualization 4
      </div>
    </div>
  );
};

export default VisualContainer;
