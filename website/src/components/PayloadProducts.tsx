import CardGroup from "./CardGroup";
import { getProducts } from '@/lib/Actions/products'
import { type CardData } from "./ProductCard";

export default async function PayloadProducts({ limit }: { limit?: number}) {

  // Get the products from the payload CMS
  const products = await getProducts(limit || undefined)

  // Transform the products into the CardData type
  const cardData: CardData[] = products.map((product) => {
    const text: string[] = product.description.map((p: any) => {
      return p.children[0].text
    })
    return {
      title: product.name,
      text: text,
      image: product?.image?.sizes?.standard?.url as string,
    }
  });

  return (
    <>
    <CardGroup cardData={cardData} />
    </>
  )
}