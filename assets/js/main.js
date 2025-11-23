// Theme toggle + persistence
(function () {
  const root = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const metaThemeColor = document.getElementById('theme-color-meta');

  const systemPrefersDark = window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  const storedTheme = localStorage.getItem('sneksoft-theme');
  let currentTheme = storedTheme || (systemPrefersDark ? 'dark' : 'light');

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    metaThemeColor.setAttribute('content', theme === 'dark' ? '#101018' : '#f7f4fb');

    const sun = themeToggle?.querySelector('.icon-sun');
    const moon = themeToggle?.querySelector('.icon-moon');
    if (sun && moon) {
      if (theme === 'dark') {
        sun.style.display = 'none';
        moon.style.display = 'inline';
      } else {
        sun.style.display = 'inline';
        moon.style.display = 'none';
      }
    }
  }

  applyTheme(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('sneksoft-theme', currentTheme);
      applyTheme(currentTheme);
    });
  }

  // PWA: register service worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .catch((err) => console.warn('Service worker registration failed:', err));
    });
  }
})();
