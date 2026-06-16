import type { MetadataRoute } from "next";
import { SITE } from "./lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Elijah Monjardin — React Developer",
    short_name: "Elijah Monjardin",
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#060913",
    theme_color: "#060913",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
