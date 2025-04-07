import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Match } from './types/match';

type Props = {
  match: Match;
};

const MatchGridCard = ({ match }: Props) => {
  return (
    <View style={styles.card}>
      <Image source={match.image} style={styles.image} />
      <Text style={styles.title}>{match.title}</Text>
      <Text style={styles.detail}>{match.city} - {match.distance} km</Text>
      <Text style={styles.level}>Nivel: {match.level}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 16,
    marginRight: 10,
    padding: 10,
    elevation: 2,
  },
  image: {
    width: '90%',
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: { fontWeight: 'bold' },
  detail: { color: '#555', fontSize: 12 },
  level: { fontSize: 12, fontStyle: 'italic' },
});

export default MatchGridCard;
