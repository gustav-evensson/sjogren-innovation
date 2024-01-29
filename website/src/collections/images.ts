import { CollectionConfig } from "payload/types";

export const Images: CollectionConfig = {
  slug: "images",
  hooks: {
    beforeChange: [
      ({req, data}) => {
        return {...data, product: req?.body?.product}
      }
    ],
  },
  admin: {
    hidden: true
  },
  upload: {
    staticURL: '/images',
    staticDir: "images",
    imageSizes: [
      {
        name: "standard",
        width: 1024,
        height: 1024,
        position: 'centre',
      },
    ],
    mimeTypes: ["image/jpeg", "image/png", "image/webp", "image/svg"],
  },
  fields: [
    {
      name: 'product',
      type: 'relationship',
      relationTo: 'products',
      required: true,
      hasMany: false,
    }
  ]
}