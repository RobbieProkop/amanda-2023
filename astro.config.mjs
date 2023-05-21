import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  scripts: {
    // Other scripts
    // ...
    postBuild: "cp -R ./fonts dist/",
  },
});
