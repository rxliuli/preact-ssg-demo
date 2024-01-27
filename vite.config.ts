import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

export default defineConfig(({ mode }) => {
  if (mode === 'test') {
    return {
      plugins: [
        {
          name: 'test',
          options(opts) {
            opts.input = ['./src/index.tsx']
            opts.preserveEntrySignatures = 'allow-extension'
          },
        },
      ],
      build: {
        minify: false,
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
