import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/torronto-caseeasy/",
  optimizeDeps: {
    include: ['@tiptap/react', '@tiptap/starter-kit'],
    exclude: ['problematic-package'], // If certain packages cause issues
  },
})
