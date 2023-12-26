import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoName = 'DA-JS-Projet11';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? `/${repoName}/` : '/',
}));
