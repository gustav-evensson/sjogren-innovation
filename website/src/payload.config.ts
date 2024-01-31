import { webpackBundler } from "@payloadcms/bundler-webpack";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import path from "path";
import { buildConfig } from "payload/config";
import { Products } from "./collections/products";
import { Images } from "./collections/images";1

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
  collections: [Products, Images],
  routes: {
    admin: '/admin'
  },
  admin: {
    bundler: webpackBundler(),
    meta: {
      titleSuffix: '- Sjögren Innovation',
      favicon: '/icon.png',
      ogImage: '/openGraph/thumbnail.png',
    }
  },
  rateLimit: {
    max: 2000,
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGO_URL!,
  }),
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  }
})