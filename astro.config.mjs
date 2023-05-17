import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  scripts: {
    // Other scripts
    // ...
    postBuild: "cp -R ./fonts dist/",
  },
});
