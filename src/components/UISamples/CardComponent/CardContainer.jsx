import React from "react";
import Card1 from "./Cards/Card1";
import Card2 from "./Cards/Card2";
import Card3 from "./Cards/Card3";
import Card4 from "./Cards/Card4";
import Card5 from "./Cards/Card5";

const CardContainer = () => {
  return (
    <div className="mx-4 grid grid-cols-4 grid-rows-2 gap-6 h-[55rem]">
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
      <div className="bg-amber-500"></div>
      <div className="bg-amber-500"></div>
    </div>
  );
};

export default CardContainer;
