'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({ theme: 'light', toggle: () => {} });

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  // On mount: read saved preference or system preference
  useEffect(() => {
    const saved = localStorage.getItem('sangoe-theme');
    if (saved === 'dark' || saved === 'light') {
      apply(saved);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      apply('dark');
    } else {
      apply('light');
    }
  }, []);

  function apply(t) {
    setTheme(t);
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem('sangoe-theme', t);
  }

  function toggle() {
    apply(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
