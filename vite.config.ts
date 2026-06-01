import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// `base` must match the GitHub Pages project path:
// https://sweet-dreams-us.github.io/ChampsNashvilleHotChicken/
export default defineConfig({
  base: '/ChampsNashvilleHotChicken/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
