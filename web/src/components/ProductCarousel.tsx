import Image from "next/image";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function ProductCarousel({ images }: { images: string[] }) {
  return (
    <Carousel className="w-full h-full">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full h-full overflow-hidden rounded-3xl aspect-square place-items-center">
              <Image src={image} fill className="object-cover" alt="product image" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4"/>
    </Carousel>
  );
}
