import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
// import dotenv from "dotenv";
// dotenv.config();

let faviconURL = "/img/logo-only.png";

export default defineConfig({
  // build: {
  //   env: {
  //     SUPABASE_URL: process.env.SUPABASE_URL,
  //     SUPABASE_KEY: process.env.SUPABASE_KEY,
  //   },
  // },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webmanifest,json,mp3}"],
      },
      // install your native app on users device from the app store
      // related_applications: [{
      //   platform: "play",
      //   id: "com.google.samples.apps.iosched"
      // }],
      includeAssets: ["/public/*"],
      prefer_related_applications: false,
      manifest: {
        name: "TaleTalk",
        short_name: "TaleTalk",
        description: "Learn to speak another language through stories",
        scope: "/",
        start_url: "/",
        background_color: "#2f4f4f",
        theme_color: "#2f4f4f",
        display: "fullscreen",// or standalone
        orientation: "portrait",
        icons: [
          {
            src: faviconURL,
            sizes: "512x512",
            type: "image/svg+xml",
            purpose: "any maskable",
          },
          {
            src: faviconURL,
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
        ],
      },
    }),
  ],
});
