import InfoCard from "./InfoCard";
import { type CardData } from "./ProductCard";

export default function InfoCardGroup({ cardData }: { cardData: CardData[] }) {

  return (
    <div className="w-full flex flex-col gap-12 lg:gap-28">
      {cardData.map((data, i) => (
        <InfoCard key={i} {...data} reversed={i % 2 != 0} />
      ))}
    </div>
  );
}
