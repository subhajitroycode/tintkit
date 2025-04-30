import React from "react";
import { nanoid } from "nanoid";
import Card1 from "./Cards/Card1";
import Card2 from "./Cards/Card2";
import Card3 from "./Cards/Card3";
import Card4 from "./Cards/Card4";
import Card5 from "./Cards/Card5";
import Card6 from "./Cards/Card6";
import Card7 from "./Cards/Card7";

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
