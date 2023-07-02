import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = "https://liteechka.ru";
  return [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/contacts`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/galery`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/types-page`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/privacy/cookies`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/privacy/personal`,
      lastModified: new Date(),
    },
  ];
}
