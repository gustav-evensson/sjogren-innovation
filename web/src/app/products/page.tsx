import MaxWidthProvider from "@/components/MaxWidthProvider";
import SectionHeader from "@/components/SectionHeader";
import CardGroup from "@/components/ProductCardGroup";

const getProductData = async () => {
  try {
    const data = await fetch(process.env.HOST_URL + "/api/content/getProducts", { next: { revalidate: 10 } })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error));

    return data?.products;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

export default async function Products() {
  const products = await getProductData();

  return (
    <MaxWidthProvider>
      <section className="flex flex-col items-center gap-12 mt-24 mb-16 sm:mb-24">
        <SectionHeader title="Tidigare produkter" subTitle="Tidigare produkter och projekt som kanske kan inspirera dig" />
        <CardGroup cardData={products} />
      </section>
    </MaxWidthProvider>
  );
}
