import { defineConfig } from 'vitest/config';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/Eventuality.ts',
      name: 'Eventuality',
      fileName: (format) => `eventuality.${format}.js`,
      formats: ['es', 'cjs', 'umd'],
    },
    rollupOptions: {
      // Excluye dependencias externas si tienes
      external: [],
      output: {
        globals: {},
      },
    },
  },
  test: {
    globals: true,
    environment: 'node', // O 'jsdom' si tus pruebas interactúan con el DOM
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      reportsDirectory: './coverage',
      include: ['src/**/*.ts'],
      exclude: [
        'src/index.ts', // A menudo el archivo principal solo exporta
      ],
    },
  },
  // No se necesita configuración adicional de Vite para servir `examples` por defecto
});
