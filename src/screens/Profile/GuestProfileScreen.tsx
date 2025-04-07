import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useUser } from '../../store/context/userContext';
import { useNavigation } from '@react-navigation/native';

const GuestProfileScreen = () => {
  const navigation = useNavigation<any>();
  const { logout } = useUser();

  const handleGuest = () => {
    logout();
    navigation.navigate('AuthStack');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Bienvenido invitado
      </Text>

      <Text style={styles.subtext}>
        Estás navegando en modo invitado.
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleGuest}>
        <Text style={styles.buttonText}>Inicia sesión para acceder a tu perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

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

export default GuestProfileScreen;
