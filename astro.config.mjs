import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  image: {
    // Use passthrough service to avoid Sharp requirement in CI
    service: { entry: 'astro/assets/services/noop' },
  },
  server: {
    port: 4000,
    host: 'localhost',
  },
});

