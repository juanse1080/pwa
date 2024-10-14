import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    start_url: "/",
    name: "PWA",
    short_name: "PWA",
    description: "Generated PWA",
    display: "standalone",
    theme_color: "#fff",
    background_color: "#fff",
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
