// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
// 
// https://astro.build/config
export default defineConfig({
  site: 'https://niekkemp.github.io/aion-web',
  base: '/aion-web',
  vite: {
    plugins: [tailwindcss()]
  }
});