import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useUser } from '../../store/context/userContext';


export default function HomeScreen() {
  const { user, logout } = useUser();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Bienvenido {user?.isGuest ? 'invitado' : user?.displayName ?? 'usuario'} 👋
      </Text>

      <Text style={styles.subtext}>
        {user?.isGuest
          ? 'Estás navegando en modo invitado.'
          : 'Has iniciado sesión correctamente.'}
      </Text>

      <TouchableOpacity style={styles.button} onPress={logout}>
        <Text style={styles.buttonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtext: {
    fontSize: 14,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#000000',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
