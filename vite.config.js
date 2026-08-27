import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function copyStaticAssetsPlugin() {
  return {
    name: 'copy-static-assets',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir, { recursive: true });
      }
      // Guarantee app.js is in dist/
      const appSources = ['public/app.js', 'app.js'];
      for (const src of appSources) {
        const fullSrc = path.resolve(__dirname, src);
        if (fs.existsSync(fullSrc)) {
          fs.copyFileSync(fullSrc, path.join(distDir, 'app.js'));
          console.log(`[build] Copied ${src} to dist/app.js`);
          break;
        }
      }

      // Guarantee image-assets.js is in dist/
      const imgAssetSources = ['public/image-assets.js', 'image-assets.js'];
      for (const src of imgAssetSources) {
        const fullSrc = path.resolve(__dirname, src);
        if (fs.existsSync(fullSrc)) {
          fs.copyFileSync(fullSrc, path.join(distDir, 'image-assets.js'));
          console.log(`[build] Copied ${src} to dist/image-assets.js`);
          break;
        }
      }
      const imgSources = ['public/images', 'images'];
      for (const src of imgSources) {
        const fullSrc = path.resolve(__dirname, src);
        if (fs.existsSync(fullSrc)) {
          const dest = path.join(distDir, 'images');
          if (fs.cpSync) {
            fs.cpSync(fullSrc, dest, { recursive: true });
          }
          console.log(`[build] Copied ${src} to dist/images`);
          break;
        }
      }
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    copyStaticAssetsPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5174,
  },
});
