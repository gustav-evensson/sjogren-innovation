import { NextRequest, NextResponse } from 'next/server';
import { createClient } from 'contentful';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})

export async function GET(request: NextRequest) {

  console.log(process.env.CTF_SPACE_ID)

  const { searchParams } = new URL(request.url)

  const id = searchParams.get('id')
  const limit = searchParams.get('limit')

  console.log(id)

  const client = createClient({
    space: process.env.CTF_SPACE_ID || '',
    accessToken: process.env.CTF_DELIVERY_KEY || '',
  });

  const res = await client.getEntries({
      content_type: 'product',
      limit: limit ? parseInt(limit) : undefined,
      order: ['fields.sortNumber']
    });

  return NextResponse.json({ products: res.items });
}