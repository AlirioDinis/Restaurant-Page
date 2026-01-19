import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contactos.js';

function clearContent() {
  document.getElementById('content').textContent = '';
}

// Carregar Home por padrão ao iniciar
document.addEventListener('DOMContentLoaded', () => {
  loadHome();

  document.getElementById('homeBtn').addEventListener('click', () => {
    clearContent();
    loadHome();
  });

  document.getElementById('menuBtn').addEventListener('click', () => {
    clearContent();
    loadMenu();
  });

  document.getElementById('contactBtn').addEventListener('click', () => {
    clearContent();
    loadContact();
  });
}); 