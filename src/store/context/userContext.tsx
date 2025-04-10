import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
  useEffect,
} from 'react';
import auth from '@react-native-firebase/auth';
import { getUserFromStorage, saveUserToStorage } from '../../Utils/storage';

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
  isGuest?: boolean;
};

type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
  setGuestUser: () => void;
  logout: () => void;
  loading: boolean;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const setUserWithStorage = (userData: User) => {
    setUser(userData);
    if (!userData.isGuest) {
      saveUserToStorage(userData);
    }
  };

  const setGuestUser = () => {
    setUser({
      uid: 'guest',
      email: 'guest@lpsport.com',
      displayName: 'Invitado',
      isGuest: true,
    });
  };

  const logout = async () => {
    setUser(null);
    await auth().signOut();
  };

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser?.email) {
        const userData = await getUserFromStorage(firebaseUser.email);
        if (userData) {
          setUserWithStorage(userData);
        } else {
          setUserWithStorage({
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            displayName: firebaseUser.displayName ?? '',
            isGuest: false,
          });
        }
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = useMemo(
    () => ({
      user,
      setUser,
      setGuestUser,
      logout,
      loading,
    }),
    [user, loading]
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
