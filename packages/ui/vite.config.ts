import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig, type LibraryFormats, type LibraryOptions } from 'vite'
import dts from 'vite-plugin-dts'
import tailwindcss from '@tailwindcss/vite'

const entry = path.resolve(__dirname, 'src', 'main.ts')
const fileName: LibraryOptions['fileName'] = (_format, entryName) => `${entryName}.js`
const formats: LibraryFormats[] = ['es']
const libraryName = '@open-lab/ui'
const tsconfigPath = path.resolve(__dirname, 'tsconfig.app.json')

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      tsconfigPath,
      exclude: ['**/*.stories.tsx', '**/*.stories.js', '**/*.stories.jsx'],
    }),
  ],
  build: {
    emptyOutDir: true,
    lib: {
      entry,
      name: libraryName,
      formats,
      fileName,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
        },
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },
  },
})
