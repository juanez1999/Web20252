import { createContext } from 'react';
import { useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext('light'); //Esto crea la cajita global, option 1 es usada para consumir el contexto, esto es una referencia

//Option es 2 es para agrupar las paginas o componentes que queremos que tengan acceso al contexto
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
