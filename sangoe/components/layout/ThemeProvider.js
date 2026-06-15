'use client';
import { createContext, useContext, useEffect, useState, useCallback } from 'react';

const ThemeContext = createContext({ theme: 'light', toggle: () => {} });

export function useTheme() {
  return useContext(ThemeContext);
}

/** Apply theme to DOM and persist — defined OUTSIDE component so it's never stale */
function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  try { localStorage.setItem('sangoe-theme', t); } catch (_) {}
}

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  // On first mount: read saved preference or OS preference
  useEffect(() => {
    let saved;
    try { saved = localStorage.getItem('sangoe-theme'); } catch (_) {}
    const resolved =
      saved === 'dark' ? 'dark'
      : saved === 'light' ? 'light'
      : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark'
      : 'light';
    applyTheme(resolved);
    setTheme(resolved);
  }, []);

  const toggle = useCallback(() => {
    setTheme(prev => {
      const next = prev === 'light' ? 'dark' : 'light';
      applyTheme(next);
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
