import { create } from 'zustand';
import { Complex } from './complextype';
import { User } from '../../store/context/userContext';
import { getFavorites, saveFavorites } from '../../Utils/getFavorites';

type ToastType = 'success' | 'error';

type FavoriteStore = {
  favorites: Complex[];
  loadFavorites: (user: User) => Promise<void>;
  toggleFavorite: (
    complex: Complex,
    user: User | null,
    onToast: (payload: { message: string; type?: ToastType }) => void
  ) => Promise<void>;
};

export const useFavoriteStore = create<FavoriteStore>((set, get) => ({
  favorites: [],
  loadFavorites: async (user) => {
    const data = await getFavorites(user.email);
    set({ favorites: data });
  },
  toggleFavorite: async (complex, user, onToast) => {
    if (!user || user.isGuest) {
      onToast({ message: 'Inicia sesión para marcar favoritos', type: 'error' });
      return;
    }

    const existing = get().favorites;
    const isFav = existing.some(c => c.id === complex.id);
    const updated = isFav
      ? existing.filter(c => c.id !== complex.id)
      : [...existing, complex];

    await saveFavorites(user.email, updated);
    set({ favorites: updated });

    onToast({
      message: isFav ? 'Eliminado de favoritos' : 'Agregado a favoritos',
      type: isFav ? 'error' : 'success',
    });
  },
}));
