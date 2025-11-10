import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'https://oumaimaaitsaid.github.io/Oumaima-AitSaid-Portfolio/',
  assetsInclude: ['**/*.pdf'],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][extname]'
      }
    }
  }
})
