'use client';

import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

interface ThemeContextProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Get the initial theme from localStorage or default to 'light'
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
    document.documentElement.className = storedTheme;
  }, []);

  useEffect(() => {
    // Update the theme class on the root HTML element
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme); // Save the theme in localStorage
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
