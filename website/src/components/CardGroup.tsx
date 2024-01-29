import TextImageCard from "./ProductCard";
import { type Product } from "@/payload-types";

export default function CardGroup({ cardData }: { cardData: Product[] }) {

  return (
    <div className="w-full flex flex-col gap-12 lg:gap-28">
      {cardData.map((data, i) => (
        <TextImageCard key={i} product={data} reversed={i % 2 != 0} />
      ))}
    </div>
  );
}
