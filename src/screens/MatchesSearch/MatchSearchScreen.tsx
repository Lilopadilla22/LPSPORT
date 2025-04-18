import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import SearchBar from '../../components/SearchBar';
import Title from '../../components/Title';
import { Text } from 'react-native-gesture-handler';
import { useMatchSearch } from './useMatchSearchScreen';
import MatchJoinCard from './components/MatchJoinCard';
import { useNavigation } from '@react-navigation/native';
import ChevronLeft from '../../icons/ChevronLeft';
import { useUserStore } from '../../store/context/userStore';

const MatchSearchScreen = () => {
  const user = useUserStore(state => state.user);
  const navigation = useNavigation();
  const {
    searchTerm,
    setSearchTerm,
    filteredMatches,
  } = useMatchSearch();

  return (
    <View style={styles.container}>
      <CustomHeader logo={null} city={user?.city} />

      <SearchBar
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder="Buscar partido o ciudad"
      />

      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.containerGoBack}>
        <ChevronLeft />
        <Text style={styles.back}>Volver</Text>
      </TouchableOpacity>

      <Title text="Partidos disponibles" />

      <FlatList
        data={filteredMatches}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MatchJoinCard match={item} />}
        contentContainerStyle={styles.content}
        ListEmptyComponent={
          <Text style={styles.empty}>No hay partidos disponibles</Text>
        }
      />
    </View>
  );
};

export default MatchSearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  empty: {
    textAlign: 'center',
    marginTop: 24,
    fontSize: 16,
    color: '#888',
  },
  containerGoBack: {
    flexDirection: 'row',
    marginTop: 10,
  },
  back: {
    fontSize: 16,
    color: '#000',
  },
});
