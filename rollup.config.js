import { defineConfig } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'

export default defineConfig({
  input: ['./src/index.tsx'],
  preserveEntrySignatures: 'allow-extension',
  output: {
    dir: 'dist',
    format: 'es',
  },
  plugins: [nodeResolve(), esbuild()],
})
