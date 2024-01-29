import { cn } from "@/lib/utils";
import Image from "next/image";

export type CardData = {
  word?: string;
  title: string;
  text: string[];
  image: string;
  reversed?: boolean;
};

export default function ProductCard({ word, title, text, image, reversed }: CardData) {

  return (
    <div className={cn("w-full flex flex-col items-center justify-between gap-8 lg:flex-row lg:justify-between", {
      "lg:flex-row-reverse": reversed,
    })}>
      <div className="flex-auto">
        {word && <h5 className="font-black opacity-50" >{word}</h5>}
        <h4 className="text-4xl font-raleway font-bold mb-2">{title}</h4>
        <p className="text-text_secondary md:text-md lg:text-lg">
          {text?.map((t: any, i: number) => (
            <>
              <span key={i}>{t.text}</span>
              {i !== text.length - 1 && (
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
        <Image src={image} fill alt="product image" />
      </div>
    </div>
  );
}
