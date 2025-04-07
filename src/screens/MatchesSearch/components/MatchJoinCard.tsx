import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Match } from '../../../components/types/match';
import { useUser } from '../../../store/context/userContext';
import { useToastStore } from '../../../store/context/toastStore';


type Props = {
  match: Match;
};

const MatchJoinCard = ({ match }: Props) => {
  const { user } = useUser();
  const { showToast } = useToastStore();

  const handleJoin = () => {
    if (!user || user.isGuest) {
      showToast({ message: 'Inicia sesión para unirte', type: 'error' });
      return;
    }

    showToast({ message: 'Te has unido', type: 'success' });
  };

  return (
    <View style={styles.card}>
      <Image source={match.image} style={styles.image} />
      <Text style={styles.title}>{match.title}</Text>
      <Text style={styles.detail}>
        Nivel requerido: {match.level}
      </Text>
      <Text style={styles.detail}>
        Jugadores: {match.players}/{match.maxPlayers}
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleJoin}>
        <Text style={styles.buttonText}>Unirse</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MatchJoinCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    elevation: 2,
  },
  image: {
    height: 140,
    width: '100%',
    borderRadius: 10,
    marginBottom: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  detail: {
    color: '#555',
    marginTop: 4,
  },
  button: {
    marginTop: 10,
    paddingVertical: 10,
    backgroundColor: '#000',
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
