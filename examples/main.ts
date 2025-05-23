// Importamos desde la carpeta 'dist' que contiene los archivos compilados.
// La extensión '.js' es necesaria para módulos ESM en el navegador.
// Esta ruta es relativa a la ubicación de `index.html` cuando es servida por Vite.
// Vite manejará la transpilación de este archivo `main.ts` en el momento.
import { greet, VERSION } from '../dist/index.js';

document.addEventListener('DOMContentLoaded', () => {
  const greetingElement = document.getElementById('greeting');
  const versionElement = document.getElementById('version');

  const userName = 'Usuario del Navegador';

  if (greetingElement) {
    greetingElement.textContent = greet(userName);
  }
  if (versionElement) {
    versionElement.textContent = VERSION;
  }

  console.log(greet('Consola'));
  console.log(`Estás usando la versión ${VERSION} de mi-libreria-navegador.`);
});
