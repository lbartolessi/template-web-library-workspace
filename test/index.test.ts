import { describe, it, expect } from 'vitest';
import { greet, VERSION } from '../src/index.js'; // Nota la extensión .js

describe('Módulo principal de la librería', () => {
  describe('greet function', () => {
    it('debería saludar a una persona por su nombre', () => {
      expect(greet('Navegante')).toBe(
        '¡Hola, Navegante! Bienvenido/a desde la librería para navegador.'
      );
    });
  });

  describe('VERSION constant', () => {
    it('debería tener la versión correcta', () => {
      expect(VERSION).toBe('0.1.0');
    });
  });
});
