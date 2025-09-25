import { createContext, useState } from 'react';
import type { UserContextType, UserContextProviderType } from '../types/UserContextType';
import type { UserType } from '../types/UserType';

//1 Paso: Crear el contexto, y tipar el contexto, crear un UserContextType
// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext<UserContextType>({ user: null, setUser: () => {} });

//2 Paso: Crear el Provider y crear el UserContextProviderType
export const UserProvider = ({ children }: UserContextProviderType) => {
  //3 Paso: Crear el estado o los estados, y crear los tipados, en este caso el UserType
  const [user, setUser] = useState<UserType | null>(null);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
