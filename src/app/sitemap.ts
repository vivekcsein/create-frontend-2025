import { MetadataRoute } from "next";
import { envFrontendConfig } from "@/libs/env/env.frontend";
// change your url to your domain
const url = envFrontendConfig.APP_FRONTEND;
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      //put your production url here
      url: `${url}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
