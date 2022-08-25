import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import astroHaloThemeIntegration from "@halo-dev/astro-halo-theme-integration";
import PurgeIcons from "vite-plugin-purge-icons";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind(), astroHaloThemeIntegration()],
  outDir: "./templates",
  build: {
    format: "file",
  },
  vite: {
    plugins: [PurgeIcons()],
  },
  server: {
    port: 4000,
  },
});
