import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useUser } from '../../store/context/userContext';
import CustomHeader from '../../components/CustomHeader';
import GuestProfileScreen from './GuestProfileScreen';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ProfileProgressBar from './Components/ProfileProgressBar';

export type ProfileParamList = {
  Home: undefined;
  Account: undefined;
};

export default function ProfileScreen() {
  const { user, logout } = useUser();
  const navigation = useNavigation<NativeStackNavigationProp<ProfileParamList>>();

  if (!user || user.isGuest) {
    return <GuestProfileScreen />;
  }

  return (
    <View style={styles.container}>
      <CustomHeader logo={null} city={user.city} title={'Mi cuenta'} />
      <Text style={styles.greeting}>Hola, {user.displayName}</Text>

      <Image
        source={require('../../../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <ProfileProgressBar user={user} />

      <TouchableOpacity style={styles.buttonOutline} onPress={() => navigation.navigate('Account')}>
        <Text style={styles.buttonOutlineText}>Mi cuenta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonPrimary} onPress={logout}>
        <Text style={styles.buttonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 16,
    marginVertical: 12,
    fontWeight: '600',
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 70,
    overflow: 'hidden',
    alignSelf: 'center',
    marginBottom: 24,
    backgroundColor: '#fff',
  },
  buttonPrimary: {
    backgroundColor: '#000000',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  buttonOutline: {
    borderColor: '#000000',
    borderWidth: 2,
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 14,
  },
  buttonOutlineText: {
    color: '#000000',
    fontWeight: 'bold',
  },
});
