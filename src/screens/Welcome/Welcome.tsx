import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation = useNavigation<any>();

  return (
    <ImageBackground
      source={require('../../../assets/bg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../../../assets/logo.png')} style={styles.logo} />
        </View>

        <View style={styles.body}>
          <Text style={styles.title}>Creamos la mejor app para ti con LPSPORT</Text>
          <Text style={styles.subtitle}>Únete ahora para encontrar tu complejo deportivo ideal</Text>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.buttonOutline}
            onPress={() => navigation.navigate('AuthStack', { screen: 'Register' })}
          >
            <Text style={styles.buttonOutlineText}>Registrarse</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('AuthStack', { screen: 'Login' })}
          >
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  header: {
    marginTop: 60,
    alignItems: 'center',
  },
  logo: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  body: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#000',
    marginTop: 8,
    textAlign: 'center',
  },
  footer: {
    marginBottom: 40,
    gap: 12,
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonOutline: {
    borderColor: '#000',
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  buttonOutlineText: {
    color: '#000',
    fontWeight: 'bold',
  },
});


