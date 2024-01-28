import { getPayloadClient } from "@/get-payload";

export async function GET(request: Request) {
  const payload = await getPayloadClient({
    initOptions: {
      onInit: async (cms) => {
        console.log(`Admin URL: ${cms.getAdminURL()}`)
      }
    },
  });
 
  return Response.json({msg: 'Hello Payload'})
}