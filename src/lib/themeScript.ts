// This script runs before React hydration to prevent flash of incorrect theme
export const themeScript = `
  (function() {
    try {
      const persistedColorPreference = window.localStorage.getItem('theme');
      
      // FORCE light mode by default, ignore system preferences
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.style.colorScheme = 'light';
      document.documentElement.style.backgroundColor = 'white';
      
      // Only apply dark mode if explicitly set in localStorage
      if (persistedColorPreference === 'dark') {
        document.documentElement.classList.add('dark');
        document.documentElement.setAttribute('data-theme', 'dark');
        document.documentElement.style.colorScheme = 'dark';
        document.documentElement.style.backgroundColor = 'rgb(15, 23, 42)';
      }
    } catch (e) {
      // Fallback to light mode on error
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.style.colorScheme = 'light';
      document.documentElement.style.backgroundColor = 'white';
      console.error('Theme script error:', e);
    }
  })();
`;