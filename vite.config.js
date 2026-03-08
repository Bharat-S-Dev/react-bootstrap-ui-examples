import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     pages: Path.resolve(__dirname, "src/pages")
  //   },
  // },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          "import",
          "if-function",
          "global-builtin",
          "color-functions",
        ],
      },
    },
  },
})
