"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import ProductCarousel from "./ProductCarousel";
import StaggerText from "./animations/StaggerText";
import FadeDiv from "./animations/FadeDiv";

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
        {word && <h5 className="font-medium opacity-30 uppercase"><StaggerText aos>{word}</StaggerText></h5>}
        <h4 className="text-4xl font-raleway font-bold mb-2">
          <StaggerText aos>{title}</StaggerText>
        </h4>
        <p className="text-text_secondary md:text-md lg:text-lg">
          {text?.map((t: any, i: number) => (
            <>
              <span key={i}>
                <StaggerText aos stagger={0.001}>{t}</StaggerText>
              </span>
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
        <FadeDiv delay={.3} aos className="relative w-full lg:w-[350px] lg:min-w-[350px] overflow-hidden rounded-3xl aspect-square place-items-center">
          <Image src={images[0]} fill alt="product image" />
        </FadeDiv>
      ) : (
        <FadeDiv delay={.3} aos className="relative w-full lg:w-[350px] lg:min-w-[350px] rounded-3xl aspect-square place-items-center">
          <ProductCarousel images={images} />
        </FadeDiv>
      )}
    </div>
  );
}
