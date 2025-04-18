import { FlatList, StyleSheet, View, Text } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import Title from '../../components/Title';
import SearchBar from '../../components/SearchBar';
import MatchGridCard from '../../components/MatchGridCard';
import { useMatchmakingScreen } from './useMatchmakingScreen';
import { useUserStore } from '../../store/context/userStore';


const MatchesScreen = () => {
  const user = useUserStore(state => state.user);
  const { filteredMatches, city, setCity } = useMatchmakingScreen();

  return (
    <View style={styles.container}>
      <CustomHeader logo={null} city={user?.city} />

      <SearchBar
        value={city ?? ''}
        onChangeText={setCity}
        placeholder="Buscar por ciudad"
      />

      <Title text="Partidos recomendados para ti"  />

      <FlatList
        numColumns={2}
        data={filteredMatches}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MatchGridCard match={item} />}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={<Text style={styles.empty}>No hay partidos recomendados</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  listContent: {
    padding: 16,
  },
  empty: {
    textAlign: 'center',
    marginTop: 24,
    fontSize: 16,
    color: '#999',
  },
});

export default MatchesScreen;


