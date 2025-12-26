import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';
import playformCompress from '@playform/compress';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), partytown(), playformCompress()],
  image: {
    // Use passthrough service to avoid Sharp requirement in CI
    service: { entry: 'astro/assets/services/noop' },
  },
  server: {
    port: 4000,
    host: 'localhost',
  },
});