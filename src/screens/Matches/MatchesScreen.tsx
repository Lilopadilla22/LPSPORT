import { FlatList, StyleSheet, View } from 'react-native';
import CustomHeader from '../../components/CustomHeader';

import { useUser } from '../../store/context/userContext';
import { useFilterStore } from '../../store/context/filterStore';
import { matchesMock } from '../../mocks/matches';
import { normalizeText } from '../../Utils/normalizeText';

import Title from '../../components/Title';
import { Text } from 'react-native-gesture-handler';
import SearchBar from '../../components/SearchBar';
import MatchGridCard from '../../components/MatchGridCard';

const MatchesScreen = () => {
  const { user } = useUser();
  const { level, city } = useFilterStore();

  const filteredMatches = matchesMock.filter((match) => {
    const normalizedCity = normalizeText((city ?? '').trim());
    const matchCity = normalizeText(match.city.trim());
    const matchLevel = match.level;

    const cityMatches = city ? matchCity === normalizedCity : true;
    const levelMatches = level ? matchLevel === level : true;

    return cityMatches && levelMatches;
  });
  return (
    <View style={styles.container}>
      <CustomHeader
        logo={null}
        city={user?.city}
      />

      <SearchBar
        value={city ?? ''}
        onChangeText={(value) => useFilterStore.getState().setCity(value)}
        placeholder="Buscar por ciudad"
      />

      <Title text="Partidos filtrados" />

      <FlatList
        numColumns={2}
        data={filteredMatches}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MatchGridCard match={item} />}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={<Text style={styles.empty}>No hay partidos para mostrar</Text>}
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

