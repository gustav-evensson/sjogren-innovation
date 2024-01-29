import TextImageCard from "./ProductCard";
import { type CardData } from "./ProductCard";

export default function CardGroup({ cardData }: { cardData: CardData[] }) {

  return (
    <div className="w-full flex flex-col gap-12 lg:gap-28">
      {cardData.map((data, i) => (
        <TextImageCard key={i} {...data} reversed={i % 2 != 0} />
      ))}
    </div>
  );
}
