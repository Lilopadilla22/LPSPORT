import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Complex } from '../complextype';

type Props = {
  complex: Complex;
};

const ComplexMiniCard = ({ complex }: Props) => {
  return (
    <View style={styles.card}>
      <Image source={complex.image} style={styles.image} />
      <Text style={styles.title}>{complex.name}</Text>
      <Text style={styles.detail}>{complex.city}</Text>
      <Text style={styles.detail}>{complex.distance} km</Text>
    </View>
  );
};

export default ComplexMiniCard;

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 240,
    borderRadius: 12,
    overflow: 'hidden',
    marginRight: 12,
    backgroundColor: '#fff',
    elevation: 2,
    marginTop: 8,
    padding: 8,
  },
  image: {
    width: '100%',
    height: 140,
    borderRadius: 10,
    marginBottom: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingHorizontal: 4,
    marginBottom: 2,
  },
  detail: {
    fontSize: 14,
    color: '#666',
    paddingHorizontal: 4,
    marginBottom: 2,
  },
});
