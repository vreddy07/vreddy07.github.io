import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base '/' works for a user site repo (yourusername.github.io).
// If you deploy to a project repo instead, change base to '/repo-name/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
