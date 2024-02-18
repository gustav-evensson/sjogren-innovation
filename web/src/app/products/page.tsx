import MaxWidthProvider from "@/components/MaxWidthProvider";
import SectionHeader from "@/components/SectionHeader";
import CardGroup from "@/components/CardGroup";

import { productsData } from "@/lib/products";

export default function Products() {
  return (
    <MaxWidthProvider>
      <section className="flex flex-col items-center gap-12 mt-24 mb-16 sm:mb-24">
        <SectionHeader title="Tidigare produkter" subTitle="Tidigare produkter och projekt som kanske kan inspirera dig" />
        <CardGroup cardData={productsData} />
      </section>
    </MaxWidthProvider>
  );
}
