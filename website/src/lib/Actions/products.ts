"use server";

import { getPayloadClient } from '../../get-payload';


async function getProducts(limit?: number) {
  const payload = await getPayloadClient()
  const { docs: products } = await payload.find({
    collection: 'products',
    limit: limit,
  })
  return products
}