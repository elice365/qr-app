'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains('dark');
    setDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  if (!mounted) {
    return (
      <button
        className="surface p-2.5 hover:scale-105 transition-all duration-200"
        aria-label="Toggle theme"
        disabled
      >
        <div className="w-5 h-5 opacity-50" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="surface p-2.5 hover:scale-105 hover:bg-opacity-80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      aria-label={`Switch to ${darkMode ? 'light' : 'dark'} theme`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <Sun 
          className={`w-5 h-5 text-yellow-500 transition-all duration-300 ${
            darkMode ? 'rotate-180 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
          }`}
        />
        <Moon 
          className={`w-5 h-5 text-secondary absolute transition-all duration-300 ${
            darkMode ? 'rotate-0 scale-100 opacity-100' : '-rotate-180 scale-0 opacity-0'
          }`}
        />
      </div>
    </button>
  );
}