import React from "react";
import {
  Visual1,
  Visual2,
  Visual3,
  Visual4,
  Visual5,
  Visual6,
} from "./Visuals";

const VisualContainer = () => {
  return (
    <div className="md:mx-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ">
      <Visual1 />
      <Visual2 />
      <Visual3 />
      <Visual4 />
      <Visual5 />
      <Visual6 />
    </div>
  );
};

export default VisualContainer;
