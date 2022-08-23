import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteFonts from 'vite-plugin-fonts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteFonts({
      google: {
        families: [
          {
            name: 'Roboto',
            styles: 'ital,wght@0,400;0,500;0,600;0,700;1,700',
          },
          {
            name: 'Space Mono',
            styles: 'ital,wght@0,400;0,500;0,600;0,700;1,700',
          },
        ],
      },
    }),
  ],
})
