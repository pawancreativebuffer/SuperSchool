import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import reactNativeWeb from 'vite-plugin-react-native-web';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  esbuild: {
    jsxImportSource: 'nativewind',
  },
  plugins: [
    react({
      jsxImportSource: 'nativewind',
      babel: {
        plugins: ['nativewind/babel']
      }
    }),
    reactNativeWeb(),
  ],
  server: {
    port: 5173,
    strictPort: true,
  },
});
