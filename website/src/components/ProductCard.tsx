import { cn } from "@/lib/utils";
import Image from "next/image";
import { type Product } from "@/payload-types";

export type CardData = {
  product: Product;
  reversed?: boolean;
};


export default function ProductCard({ product, reversed }: CardData) {

  const { name, description, image } = product

  return (
    <div className={cn("w-full flex flex-col items-center justify-between gap-8 lg:flex-row lg:justify-between", {
      "lg:flex-row-reverse": reversed,
    })}>
      <div className="flex-auto">
        <h4 className="text-4xl font-raleway font-bold mb-2">{name}</h4>
        <p className="text-text_secondary md:text-md lg:text-lg">
          {description.map((t: any, i: number) => (
            <>
              <span key={i}>{t.text}</span>
              {i !== description.length - 1 && (
                <>
                  <br />
                  <br />
                </>
              )}
            </>
          ))}
        </p>
      </div>
      <div className="relative w-full lg:w-[350px] lg:min-w-[350px] aspect-square place-items-center">
        <Image src={image.url as string} fill className="text-text" alt="product image" />
      </div>
    </div>
  );
}
