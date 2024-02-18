"use server";

import { getMongoDB } from '@/get-mongo';
import { ObjectId } from 'mongodb';
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

type MongoProduct = {
  name: string
  description: {
    [k: string]: unknown;
  }[];
  imageURL: string
}

export async function getMongoProducts(limit = 4): Promise<MongoProduct[]> {
  // Get the MongoDB connection
  const db = await getMongoDB()

  // Get the products
  const productCollection = db.collection('products')
  const products = await productCollection.find().limit(limit).toArray()
  
  // Get the images
  const imageQuery = { _id: { $in: products.map((p: any) => new ObjectId(p.image)) } }
  console.log(imageQuery)
  const imageCollection = db.collection('images')
  const images = await imageCollection.find(imageQuery).toArray()

  // Combine the products and images
  const completeProducts = products.map((product: any) => {
    const image = images.filter((image: any) => new ObjectId(product.image).equals(image._id))[0] 
    return {
      name: product.name,
      description: product.description,
      imageURL: '/images/' + image.filename
    }
  })

  console.log(completeProducts)
  return completeProducts
}