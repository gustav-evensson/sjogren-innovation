"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import ProductCarousel from "./ProductCarousel";

export type CardData = {
  word?: string;
  title: string;
  text: string[];
  images: string[];
  reversed?: boolean;
};

export default function InfoCard({ word, title, text, images, reversed }: CardData) {
  return (
    <div
      className={cn("w-full flex flex-col items-center justify-between gap-8 lg:flex-row lg:justify-between", {
        "lg:flex-row-reverse": reversed,
      })}
    >
      <div className="flex-auto">
        {word && <h5 className="font-medium opacity-30 uppercase">{word}</h5>}
        <h4 className="text-4xl font-raleway font-bold mb-2">{title}</h4>
        <p className="text-text_secondary md:text-md lg:text-lg">
          {text?.map((t: any, i: number) => (
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
      {images.length <= 1 ? (
        <div className="relative w-full lg:w-[350px] lg:min-w-[350px] overflow-hidden rounded-3xl aspect-square place-items-center">
          <Image src={images[0]} fill alt="product image" />
        </div>
      ) : (
        <div className="relative w-full lg:w-[350px] lg:min-w-[350px] rounded-3xl aspect-square place-items-center">
          <ProductCarousel images={images} />
        </div>
      )}
    </div>
  );
}