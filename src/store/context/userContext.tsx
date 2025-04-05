import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from 'react';

export type UserLevel = 'novato' | 'intermedio' | 'avanzado';

export type User = {
  uid: string;
  email: string;
  displayName?: string;
  lastName?: string;
  age?: number;
  city?: string;
  level?: UserLevel;
  cc?: string;
  numid?: number;
  isGuest?: boolean;
};

type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
  setGuestUser: () => void;
  logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const setGuestUser = () => {
    setUser({
      uid: 'guest',
      email: 'guest@lpsport.com',
      displayName: 'Invitado',
      isGuest: true,
    });
  };

  const logout = () => setUser(null);

  const value = useMemo(
    () => ({
      user,
      setUser,
      setGuestUser,
      logout,
    }),
    [user]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
