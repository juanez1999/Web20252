import { createContext, useState } from 'react';

//Paso 0: Importar createContext from react
//Paso 1: Crear el contexto (createContext)
//Paso 2: Exportar el contexto
//Paso 3: Crear el provider (agrupador de pages, components)
//Paso 4: Exportar el provider

// eslint-disable-next-line react-refresh/only-export-components
export const ToDoContext = createContext(null);

export const ToDoProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);

  return (
    <ToDoContext.Provider value={{ taskList, setTaskList }}>
      {children}
    </ToDoContext.Provider>
  );
};
