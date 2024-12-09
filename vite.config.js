import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPluginPrettier from 'eslint-plugin-prettier'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), eslintPluginPrettier()],
})
