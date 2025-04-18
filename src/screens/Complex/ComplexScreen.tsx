import React from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';

import CustomHeader from '../../components/CustomHeader';

import { useComplexScreen } from './useComplexScreen';
import ComplexCard from './components/ComplexCard';
import SearchBar from '../../components/SearchBar';
import ChevronLeft from '../../icons/ChevronLeft';
import { useNavigation } from '@react-navigation/native';
import { useUserStore } from '../../store/context/userStore';


const ComplexScreen = () => {
  const user = useUserStore(state => state.user);
  const { searchTerm,
    setSearchTerm,
    filteredComplexes } = useComplexScreen();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <CustomHeader city={user?.city} />

      <SearchBar value={searchTerm} onChangeText={setSearchTerm} />

      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.containerGoBack}>
        <ChevronLeft />
        <Text style={styles.back}>Volver</Text>
      </TouchableOpacity>

      <FlatList
        data={filteredComplexes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ComplexCard complex={item} />}
        contentContainerStyle={styles.content}
        ListEmptyComponent={<Text style={styles.empty}>No hay complejos disponibles</Text>}
      />
    </View>
  );
};

export default ComplexScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  empty: {
    textAlign: 'center',
    marginTop: 20,
    color: '#888',
  },
  containerGoBack: {
    flexDirection: 'row',
    marginTop: 10,
  },
  back: {
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
  },
});
