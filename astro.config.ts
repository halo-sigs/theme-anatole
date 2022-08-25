import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import astroHaloThemeIntegration from "@halo-dev/astro-halo-theme-integration";
import Icons from "unplugin-icons/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind(), astroHaloThemeIntegration()],
  outDir: "./templates",
  build: {
    format: "file",
  },
  vite: {
    plugins: [Icons({ compiler: "vue3" })],
  },
  server: {
    port: 4000,
  },
});
