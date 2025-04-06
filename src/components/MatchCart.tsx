import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Match } from './types/match';


type MatchCardProps = {
  match: Match;
};

const MatchCard = ({ match }: MatchCardProps) => {
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
    width: 220,
    height: 280,
    borderRadius: 12,
    overflow: 'hidden',
    marginRight: 12,
    backgroundColor: '#fff',
    elevation: 3,
    marginTop: 8,
  },
  image: {
    width: '100%',
    height: 150,
    margin: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
    paddingHorizontal: 8,
  },
  detail: {
    fontSize: 15,
    color: '#666',
    paddingHorizontal: 8,
    marginTop: 2,
  },
  level: {
    fontSize: 14,
    color: '#444',
    marginTop: 2,
    paddingHorizontal: 8,
    marginBottom: 6,
  },
});

export default MatchCard;
