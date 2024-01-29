
import CardGroup from "./CardGroup"
import { getPayloadClient } from "@/get-payload"
import { type Product } from "@/payload-types";


export default async function ProductProvider() {

  async function getProducts(): Promise<Product[]> {
    "use server";

    const payload = await getPayloadClient()
    const products = await payload.find({
      collection: "products",
    })
    console.log("products")
    console.log(products.docs)
    return products.docs
  }

  return (
    <CardGroup cardData={await getProducts()} />
  )
}