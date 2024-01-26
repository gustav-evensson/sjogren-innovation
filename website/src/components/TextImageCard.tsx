import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  word?: string;
  title: string;
  text: string[];
  image: string;
  alt: string;
  reversed?: boolean;
};

export default function TextImageCard({ word, title, text, image, alt, reversed }: Props) {
  return (
    <div className={cn("w-full flex flex-col items-center gap-8 lg:flex-row lg:justify-between", {
      "lg:flex-row-reverse": reversed,
    })}>
      <div className="flex-auto">
        <h3 className={cn("opacity-30 font-medium mb-2 uppercase", { hidden: !word })}>{word}</h3>
        <h4 className="text-4xl font-raleway font-bold mb-2">{title}</h4>
        <p className="text-text_secondary md:text-md lg:text-lg">
          {text.map((t, i) => (
            <>
              <span key={i}>{t}</span>
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
        <Image src={image} fill alt={alt} />
      </div>
    </div>
  );
}
