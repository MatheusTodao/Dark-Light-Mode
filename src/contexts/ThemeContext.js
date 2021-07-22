import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

import themes from '../styles/themes';

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('theme')) || 'light';
    } catch (error) {
      return 'light';
    }
  })

  const currentTheme = themes[theme] || themes.light;

  useEffect(() => (
    localStorage.setItem('theme', JSON.stringify(theme))
  ), [theme])


  function handleToggleTheme() {
    setTheme((prevState) => prevState === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{
      theme: currentTheme,
      selectedTheme: theme,
      onToggleTheme: handleToggleTheme,
    }}>
      {children}
    </ThemeContext.Provider>
  )
}
