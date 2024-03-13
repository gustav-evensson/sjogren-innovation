"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import ProductCarousel from "./ProductCarousel";
import FadeDiv from "./animations/FadeDiv";
import StaggerText from "./animations/StaggerText";
import SlideDiv from "./animations/SlideDiv";

export type CardData = {
  title: string;
  text: any[];
  images: string[];
  reversed?: boolean;
};

export default function ProductCard({ title, text, images, reversed }: CardData) {
  return (
    <div
      className={cn("w-full flex flex-col items-center justify-between gap-8 lg:flex-row lg:justify-between", {
        "lg:flex-row-reverse": reversed,
      })}
    >
      <div className="flex-auto">
        <h4 className="text-4xl font-raleway font-bold mb-2"><StaggerText aos>{title}</StaggerText></h4>
        <p className="text-text_secondary md:text-md lg:text-lg">
          {text?.map((t: any, i: number) => (
            <>
              <span key={i}>
                <StaggerText aos stagger={0.001}>{t.content[0].value}</StaggerText>
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
        <SlideDiv direction={reversed ? "left" : "right"}
          aos
          delay={0.3}
          className="relative w-full lg:w-[350px] lg:min-w-[350px] overflow-hidden rounded-3xl aspect-square place-items-center"
        >
          <Image src={images[0]} fill alt="product image" />
        </SlideDiv>
      ) : (
        <SlideDiv direction={reversed ? "left" : "right"} aos delay={0.3} className="relative w-full lg:w-[350px] lg:min-w-[350px] rounded-3xl aspect-square place-items-center">
          <ProductCarousel images={images} />
        </SlideDiv>
      )}
    </div>
  );
}
