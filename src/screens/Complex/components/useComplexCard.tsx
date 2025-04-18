import { useState } from 'react';
import { Complex } from '../complextype';
import { useFavoriteStore } from '../favoriteStore';
import { useToastStore } from '../../../store/context/toastStore';
import { useUserStore } from '../../../store/context/userStore';

export const useComplexCard = (complex: Complex) => {
  const [booked, setBooked] = useState(false);
  const user = useUserStore(state => state.user);
  const { favorites, toggleFavorite } = useFavoriteStore();
  const { showToast } = useToastStore();

  const isFavorite = favorites.some(fav => fav.id === complex.id);

  const handleFavorite = async () => {
    await toggleFavorite(complex, user, showToast);
  };

  const handleBooking = () => {
    if (!user || user.isGuest) {
      showToast({ message: 'Inicia sesión para apartar', type: 'error' });
      return;
    }

    setBooked(true);
    showToast({ message: '¡Cancha apartada exitosamente!', type: 'success' });
  };

  return {
    isFavorite,
    booked,
    handleFavorite,
    handleBooking,
    user,
  };
};


