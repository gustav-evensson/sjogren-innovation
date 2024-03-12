import ProductCard from "./ProductCard";

export default function ProductCardGroup({ cardData }: { cardData: any[]}) {
  return (
    <div className="w-full flex flex-col gap-12 lg:gap-28">
      {cardData.map((data, i) => {

        console.log(data.fields.image[0])

        const dataStructure = {
          title: data.fields.title,
          text: data.fields.description.content,
          images: data.fields.image.map((img: any) => "https:" + img.fields.file.url),
        } 

        return <ProductCard key={i} {...dataStructure} reversed={i % 2 != 0} />;
      })}
    </div>
  );
}
