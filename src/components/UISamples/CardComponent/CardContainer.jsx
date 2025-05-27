import { nanoid } from "nanoid";
import { Card1, Card2, Card3, Card4, Card5, Card6, Card7 } from "./Cards";

const CardContainer = () => {
  // For desktop (lg+): original order [Card1, Card2, Card3, Card4, Card5, Card6, Card7]
  // For tablet/mobile: swap Card2 and Card3 positions [Card1, Card3, Card2, Card4, Card5, Card6, Card7]
  const desktopCards = [Card1, Card2, Card3, Card4, Card5, Card6, Card7];
  const mobileCards = [Card1, Card3, Card2, Card4, Card5, Card6, Card7];

  return (
    <>
      {/* Desktop layout - 4 columns, 2 rows */}
      <div className="hidden xl:grid mx-4 grid-cols-4 gap-6">
        {desktopCards.map((Card, index) => (
          <Card key={nanoid()} />
        ))}
      </div>

      {/* Tablet layout - 2 columns, 4 rows */}
      <div className="hidden md:grid xl:hidden mx-4 grid-cols-2 gap-6 h-auto min-h-[80rem]">
        {mobileCards.map((Card, index) => (
          <Card key={nanoid()} />
        ))}
      </div>

      {/* Mobile layout - 1 column */}
      <div className="grid md:hidden grid-cols-1 grid-rows-7 gap-6 h-auto">
        {mobileCards.map((Card, index) => (
          <Card key={nanoid()} />
        ))}
      </div>
    </>
  );
};

export default CardContainer;
