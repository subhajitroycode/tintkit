import React from "react";
import { Visual1, Visual2, Visual3, Visual4 } from "./Visuals";

const VisualContainer = () => {
  return (
    <div className="mx-4 grid grid-cols-3 grid-rows-2 gap-6 h-[55rem]">
      <Visual1 />
      <Visual2 />
      <Visual3 />
      <Visual4 />
    </div>
  );
};

export default VisualContainer;
