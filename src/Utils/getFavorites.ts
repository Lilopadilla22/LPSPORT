import AsyncStorage from '@react-native-async-storage/async-storage';
import { Complex } from '../screens/Complex/complextype';

const FAVORITES_KEY = 'favorites_complexes';

export const getFavorites = async (userEmail: string) => {
  const json = await AsyncStorage.getItem(`${FAVORITES_KEY}_${userEmail}`);
  return json ? JSON.parse(json) as Complex[] : [];
};

export const saveFavorites = async (userEmail: string, favorites: Complex[]) => {
  await AsyncStorage.setItem(`${FAVORITES_KEY}_${userEmail}`, JSON.stringify(favorites));
};
