import React from "react";
import { nanoid } from "nanoid";
import { Card1, Card2, Card3, Card4, Card5, Card6, Card7 } from "./Cards";

const cards = [Card1, Card2, Card3, Card4, Card5, Card6, Card7];

const CardContainer = () => {
  return (
    <div className="mx-4 grid grid-cols-4 grid-rows-2 gap-6 h-[55rem]">
      {cards.map((Card) => (
        <Card key={nanoid()} />
      ))}
    </div>
  );
};

export default CardContainer;
