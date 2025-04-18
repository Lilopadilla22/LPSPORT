import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../store/context/userStore';

export const saveUserToStorage = async (user: User) => {
  try {
    await AsyncStorage.setItem(user.email, JSON.stringify(user));
  } catch (error) {
    console.error('Error al guardar usuario en AsyncStorage', error);
  }
};

export const getUserFromStorage = async (email: string): Promise<User | null> => {
  try {
    const data = await AsyncStorage.getItem(email);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error al recuperar usuario de AsyncStorage', error);
    return null;
  }
};

export const clearUserStorage = async (email: string) => {
  try {
    await AsyncStorage.removeItem(email);
  } catch (error) {
    console.error('Error al limpiar usuario de AsyncStorage', error);
  }
};
