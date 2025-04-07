import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Complex } from '../complextype';
import { useUser } from '../../../store/context/userContext';

import HeartOn from '../../../icons/HeartOn';
import HeartOff from '../../../icons/HeartOff';
import { useFavoriteStore } from '../favoriteStore';
import { useToastStore } from '../../../store/context/toastStore';

type Props = {
  complex: Complex;
};

const ComplexCard = ({ complex }: Props) => {
  const { favorites, toggleFavorite } = useFavoriteStore();
  const { user } = useUser();
  const { showToast } = useToastStore();

  const isFavorite = favorites.some(fav => fav.id === complex.id);

  const handleFavorite = async () => {
    await toggleFavorite(complex, user, showToast);
  };

  const availabilityStyle = complex.available
    ? styles.available
    : styles.unavailable;

  return (
    <View style={styles.card}>
      <Image source={complex.image} style={styles.image} />

      <TouchableOpacity onPress={handleFavorite} style={styles.favoriteIcon}>
        {isFavorite ? (
          <HeartOn width={22} height={22} />
        ) : (
          <HeartOff width={22} height={22} />
        )}
      </TouchableOpacity>

      <Text style={styles.name}>{complex.name}</Text>
      <Text style={styles.info}>
        {complex.city} - {complex.distance} km
      </Text>
      <Text style={[styles.availability, availabilityStyle]}>
        {complex.available ? 'Disponible para reservas' : 'No disponible'}
      </Text>
    </View>
  );
};

export default ComplexCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    elevation: 2,
    position: 'relative',
  },
  image: {
    height: 140,
    width: '100%',
    borderRadius: 10,
    marginBottom: 8,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 12,
    right: 12,
    zIndex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  info: {
    color: '#555',
    marginVertical: 4,
  },
  availability: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  available: {
    color: '#469b89',
  },
  unavailable: {
    color: '#cc0000',
  },
});
