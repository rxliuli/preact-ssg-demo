import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

export default defineConfig(({ mode }) => {
  if (mode === 'test') {
    return {
      build: {
        minify: false,
        rollupOptions: {
          input: ['./src/index.tsx'],
          preserveEntrySignatures: 'allow-extension',
        },
      },
    }
  }
  return {
    plugins: [
      preact({
        prerender: {
          enabled: true,
          renderTarget: '#app',
        },
      }) as any,
    ],
  }
})
