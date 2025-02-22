import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import dotenv from 'dotenv'
dotenv.config()

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: "http://localhost:3000",
        changeOrigin: false
      },
      '/auth': {
        target: "http://localhost:3000",
        changeOrigin: false
      }
    }
  }
})