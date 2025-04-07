import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Match } from './types/match';


type MatchCardProps = {
  match: Match;
  variant: 'complex' | 'search' | 'matchmaking';
};

const MatchCard = ({ match, variant }: MatchCardProps) => {
  return (
    <View style={styles.card}>
      <Image source={match.image} style={styles.image} />
      <Text style={styles.title}>{match.title}</Text>

      {variant === 'complex' && (
        <>
          <Text style={styles.detail}>{match.city}</Text>
          <Text style={styles.detail}>{match.distance} km</Text>
        </>
      )}

      {variant === 'search' && (
        <>
          <Text style={styles.detail}>Ranking requerido: {match.level}</Text>
          <Text style={styles.detail}>Jugadores: {match.players}/{match.maxPlayers}</Text>
        </>
      )}

      {variant === 'matchmaking' && (
        <Text style={styles.detail}>Nivel: {match.level}</Text>
      )}
    </View>
  );
};

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

export default MatchCard;
