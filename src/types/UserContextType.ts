import type { ReactNode } from 'react';
import type { UserType } from './UserType';

//El tipado sería lo que yo mando a través del value del provider, los mismos datos o valores
export type UserContextType = {
  user: UserType | null;
  setUser: (user: UserType | null) => void;
};

export type UserContextProviderType = {
  children: ReactNode;
};
