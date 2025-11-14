// Handle FAB toggle
const fabMain = document.querySelector('.fab-main');
const fab = document.querySelector('.fab');
fabMain.addEventListener('click', () => fab.classList.toggle('active'));

// Handle Theme Change
const themes = {
  forest: { bg: '#144214', text: '#d6f7d6', accent: '#7fff7f' },
  darkpurple: { bg: '#1a142f', text: '#f5f5f5', accent: '#a77fff' },
  midnight: { bg: '#0b132b', text: '#e0e0e0', accent: '#0077b6' },
  crimson: { bg: '#2b0000', text: '#fff0f0', accent: '#ff4d4d' },
  bubblegum: { bg: '#ffe4f3', text: '#2b2b2b', accent: '#ff69b4' },
  light: { bg: '#f0f0f0', text: '#000', accent: '#0077ff' }
  
};

const themeButtons = document.querySelectorAll('.theme-btn');

themeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const theme = btn.dataset.theme;
    const colors = themes[theme];
    document.documentElement.style.setProperty('--bg', colors.bg);
    document.documentElement.style.setProperty('--text', colors.text);
    document.documentElement.style.setProperty('--accent', colors.accent);
    localStorage.setItem('LOYAL-theme', theme);
  });
});

// Load saved theme on start
const saved = localStorage.getItem('LOYAL-theme');
if (saved && themes[saved]) {
  const colors = themes[saved];
  document.documentElement.style.setProperty('--bg', colors.bg);
  document.documentElement.style.setProperty('--text', colors.text);
  document.documentElement.style.setProperty('--accent', colors.accent);
}
