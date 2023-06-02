import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://amandaprokop.com",
  integrations: [react(), svelte(), sitemap()],
  scripts: {
    // Other scripts
    // ...
    postBuild: "cp -R ./fonts dist/"
  }
});