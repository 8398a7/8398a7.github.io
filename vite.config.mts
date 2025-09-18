import path from 'node:path';
import { defineConfig } from 'vite';
import type { Plugin } from 'vite';
import react from '@vitejs/plugin-react';

const projectRoot = __dirname;
const srcDir = path.resolve(projectRoot, 'src');

const resolveSrcPlugin: Plugin = {
  name: 'resolve-src-path',
  enforce: 'pre',
  resolveId(id: string) {
    if (id.startsWith('/src/')) {
      return path.resolve(projectRoot, id.slice(1));
    }
    return null;
  },
};

export default defineConfig({
  root: 'public',
  base: './',
  plugins: [
    resolveSrcPlugin,
    react({
      jsxRuntime: 'classic',
    }),
  ],
  server: {
    port: 3000,
    host: true,
    fs: {
      allow: [projectRoot, srcDir],
    },
  },
  preview: {
    port: 3000,
    host: true,
  },
  build: {
    outDir: '../build',
    emptyOutDir: true,
  },
  publicDir: false,
  resolve: {
    alias: {
      '@': srcDir,
    },
  },
  test: {
    environment: 'jsdom',
    root: projectRoot,
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    passWithNoTests: true,
    globals: true,
    setupFiles: ['src/test/setup.ts'],
  },
});
