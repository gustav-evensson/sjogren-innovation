"use server";

import { getPayloadClient } from '../../get-payload';
import type { Product } from '../../payload-types';

export async function getProducts(limit?: number): Promise<Product[]> {
  const payload = await getPayloadClient()
  const { docs: products } = await payload.find({
    collection: 'products',
    limit: limit,
  })
  return products
}