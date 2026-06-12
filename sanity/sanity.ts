import { createClient } from "@sanity/client";


export const sanityClient = createClient({
  projectId: "vg4nyd3n",
  dataset: "production", 
  apiVersion: "2021-03-25",
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: false,
});

