const $darkModeBtn = document.querySelector('.darkModeBtn');

$darkModeBtn.addEventListener('click', ({ currentTarget }) => {
  const pressed = currentTarget.getAttribute('aria-pressed') === 'true';
  document.body.setAttribute('theme', `${!pressed ? 'dark' : 'light'}`);
  currentTarget.setAttribute('aria-pressed', !pressed);
  currentTarget.setAttribute('title', `Ativar modo ${!pressed ? 'claro' : 'escuro'}?`);
});
