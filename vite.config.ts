import { defineConfig } from 'vitest/config';

export default defineConfig({
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
