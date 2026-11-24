(() => {
  window.SITIO_LISTO = true;
  const button = document.querySelector('[data-menu-boton]');
  const menu = document.getElementById('menu');
  if (!button || !menu) return;
  const close = () => {
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Open menu');
    menu.classList.remove('abierto');
    document.body.classList.remove('menu-abierto');
  };
  button.addEventListener('click', () => {
    const opening = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(opening));
    button.setAttribute('aria-label', opening ? 'Close menu' : 'Open menu');
    menu.classList.toggle('abierto', opening);
    document.body.classList.toggle('menu-abierto', opening);
    if (opening) menu.querySelector('a')?.focus();
  });
  menu.addEventListener('click', event => { if (event.target.closest('a')) close(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.classList.contains('abierto')) { close(); button.focus(); }
  });
  window.addEventListener('resize', () => { if (window.innerWidth >= 900) close(); });
})();
