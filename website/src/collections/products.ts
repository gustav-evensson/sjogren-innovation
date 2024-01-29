import { getPayloadClient } from "../get-payload";
import { CollectionConfig } from "payload/types";

export const Products: CollectionConfig = {
  slug: "products",
  hooks: {
    afterDelete: [
      // delete the product image when the product is deleted
      async ({ doc }) => {
        const { db } = await getPayloadClient();
        await db.collections.images.deleteMany({ _id: doc.image.id });
      }
    ]
  },
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "description",
      label: "Description",
      type: "richText",
      required: true,
    },
    {
      name: "image",
      label: "Image",
      type: "upload",
      relationTo: "images",
      required: true,
    },
  ],
}