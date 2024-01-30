import MaxWidthProvider from "@/components/MaxWidthProvider";
import PayloadProducts from "@/components/PayloadProducts";
import SectionHeader from "@/components/SectionHeader";

export default function Products() {
  return (
    <MaxWidthProvider>
      <section className="flex flex-col items-center gap-12 mt-24 mb-16 sm:mb-24">
        <SectionHeader title="Tidigare produkter" subTitle="Tidigare produkter och projekt som kanske kan inspirera dig" />
        <PayloadProducts />
      </section>
    </MaxWidthProvider>
  );
}
