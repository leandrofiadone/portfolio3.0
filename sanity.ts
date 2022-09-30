import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,

	useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
	createImageUrlBuilder(config).image(source);

// const client = createClient({
// 	projectId: "rjtgc0ww",
// 	dataset: "production",
// 	apiVersion: "2022-09-30",
// 	useCdn: false,
// });
