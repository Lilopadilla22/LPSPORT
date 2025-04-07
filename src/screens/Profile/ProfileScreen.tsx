import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useUser } from '../../store/context/userContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';


const ProfileScreen = () => {

  const { user, logout } = useUser();

  useEffect(() => {
    const checkStorage = async () => {
      try {
        const keys = await AsyncStorage.getAllKeys();
        const items = await AsyncStorage.multiGet(keys);

        console.log('consultanding', keys);
        items.forEach(([key, value]) => {
          console.log(`[${key}]:`, JSON.parse(value || 'null'));
        });
      } catch (e) {
        console.error('errooooooor', e);
      }
    };

    checkStorage();
  }, []);

  console.log(user, 'Hola')
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

export default ProfileScreen