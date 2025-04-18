import { create } from 'zustand';
import auth from '@react-native-firebase/auth';
import { getUserFromStorage, saveUserToStorage, clearUserStorage } from '../../Utils/storage';

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

type UserState = {
  user: User | null;
  loading: boolean;
  setUser: (user: User | null) => void;
  setGuestUser: () => void;
  logout: () => Promise<void>;
  initAuth: () => void;
};

export const useUserStore = create<UserState>((set) => ({
  user: null,
  loading: true,

  setUser: (user) => {
    set({ user });
    if (user && !user.isGuest) {
      saveUserToStorage(user);
    }
  },

  setGuestUser: () => {
    const guest: User = {
      uid: 'guest',
      email: 'guest@lpsport.com',
      displayName: 'Invitado',
      isGuest: true,
    };
    set({ user: guest });
  },

  logout: async () => {
    const email = useUserStore.getState().user?.email;

    await auth().signOut();
    set({ user: null });

    if (email) {
      await clearUserStorage(email);
    }
  },

  initAuth: () => {
    const unsubscribe = auth().onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser?.email) {
        const userData = await getUserFromStorage(firebaseUser.email);
        if (userData) {
          set({ user: userData });
        } else {
          set({
            user: {
              uid: firebaseUser.uid,
              email: firebaseUser.email,
              displayName: firebaseUser.displayName ?? '',
              isGuest: false,
            },
          });
        }
      } else {
        set({ user: null });
      }
      set({ loading: false });
    });

    return unsubscribe;
  },
}));
