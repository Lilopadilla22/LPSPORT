import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Complex } from '../complextype';
import HeartOn from '../../../icons/HeartOn';
import HeartOff from '../../../icons/HeartOff';
import { useComplexCard } from './useComplexCard';

type Props = {
  complex: Complex;
};

const ComplexCard = ({ complex }: Props) => {
  const { isFavorite, booked, handleFavorite, handleBooking } = useComplexCard(complex);

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

      {complex.available && (
        <TouchableOpacity
          style={[styles.bookButton, booked && styles.disabledButton]}
          onPress={handleBooking}
          disabled={booked}
        >
          <Text style={styles.bookButtonText}>
            {booked ? 'Ya apartada' : 'Apartar cancha'}
          </Text>
        </TouchableOpacity>
      )}
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
  bookButton: {
    marginTop: 10,
    paddingVertical: 10,
    backgroundColor: '#000',
    borderRadius: 6,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#aaa',
  },
});
