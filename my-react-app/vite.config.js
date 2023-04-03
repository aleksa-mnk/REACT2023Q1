import {defineConfig} from 'vite';

export default defineConfig({
  test: {
    globals: true,
    setupFiles: 'src/__tests__/setup.ts',
  },
});