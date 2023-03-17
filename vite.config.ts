/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { resolve } from 'path'
import dtsPlugin from "vite-plugin-dts";
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dtsPlugin(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      name: 'ui-library',
      entry: resolve('src/main.ts'),
      formats: ['es', 'umd', 'cjs'],
    },
    rollupOptions: {
      external: 'vue',
      output: {
        globals: {
          vue: 'Vue',
        }
      }
    },
  },
  test: {
    environment: 'happy-dom',
    coverage: {
      provider: 'c8',
      reporter: ['text', 'json', 'html'],
      lines: 100,
      functions: 100,
      branches: 100,
      statements: 100,
    }
  }
})
