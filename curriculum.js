// Ejemplo: mostrar alerta al hacer clic en el email
document.querySelector('.contacto li:nth-child(2)').addEventListener('click', () => {
  alert('¿Deseas enviar un correo a timsuart@gmail.com?');
});

// Crear botón dinámicamente
const toggleBtn = document.createElement('button');
toggleBtn.textContent = '🌙 Modo Oscuro';
toggleBtn.className = 'toggle-dark';
document.body.appendChild(toggleBtn);

// Alternar clase en body
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = document.body.classList.contains('dark-mode')
    ? '☀️ Modo Claro'
    : '🌙 Modo Oscuro';
});
