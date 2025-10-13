import path from 'path';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    include: ['tslib'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const parts = id.toString().split('node_modules/')[1].split('/');
            const pkgName = parts[0];

            const smallLibs = ['clsx', 'axios', 'dayjs'];
            if (smallLibs.includes(pkgName)) return 'vendor';

            if (['react', 'react-dom', 'react-router-dom'].includes(pkgName)) return 'react-vendor';

            return pkgName;
          }
        },
      },
    },
  },
});
