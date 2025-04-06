import React from "react";
import Card1 from "./Cards/Card1";

const CardContainer = () => {
  return (
    <div className="mx-4 grid grid-cols-4 grid-rows-2 gap-6 h-[55rem]">
      <Card1 />
      <div className="bg-amber-500 col-span-2"></div>
      <div className="bg-amber-500"></div>
      <div className="bg-amber-500"></div>
      <div className="bg-amber-500"></div>
      <div className="bg-amber-500"></div>
      <div className="bg-amber-500"></div>
    </div>
  );
};

export default CardContainer;
