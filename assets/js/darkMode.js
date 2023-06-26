function setTheme(newTheme) {
  document.body.setAttribute('theme', newTheme);
  localStorage.setItem('theme', newTheme);
  $darkModeBtn.setAttribute('title', `Ativar modo ${newTheme === 'dark' ? 'claro' : 'escuro'}?`);
}

function loadInitialTheme() {
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const initialTheme =
    localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');

  setTheme(initialTheme);
}

const $darkModeBtn = document.querySelector('.darkModeBtn');

$darkModeBtn.addEventListener('click', ({ currentTarget }) => {
  const theme = document.body.getAttribute('theme');
  const newTheme = theme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
  currentTarget.blur();
});

loadInitialTheme();
