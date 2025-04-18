import React from 'react';
import { StyleSheet, Image, FlatList, ScrollView } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import SearchBar from '../../components/SearchBar';
import { useSearch } from './Hooks/useSearch';
import { Text } from 'react-native-gesture-handler';
import MatchCard from '../../components/MatchCart';
import SearchSuggestions from '../../components/SearchSuggestions';
import Title from '../../components/Title';
import Banner from '../../components/Banner';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { complexesMock } from '../../mocks/complex';
import ComplexMiniCard from '../Complex/components/ComplexMiniCard';
import { useUserStore } from '../../store/context/userStore';

export type AppStackParamList = {
  Home: undefined;
  Matches: undefined;
  Profile: undefined;
  Complexes: undefined;
  MatchSearch: undefined;
};

export default function HomeScreen() {
  const user = useUserStore(state => state.user);
  const bannerImage = require('../../../assets/banner1.png');
  const bannerImage2 = require('../../../assets/banner2.png');
  const bannerPrincipal = require('../../../assets/bannerPrincipal.png');
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();

  const {
    searchTerm,
    setSearchTerm,
    filteredMatches,
    matchesDisponibles,
    matchesRecomendados,
  } = useSearch();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainerScroll}>
      <CustomHeader
        logo={<Image source={require('../../../assets/logoName.png')} style={styles.logo} />}
        city={user?.city}
      />
      <SearchBar value={searchTerm} onChangeText={setSearchTerm} />

      <SearchSuggestions
        matches={filteredMatches}
        searchTerm={searchTerm}
        onSelect={(match) => { console.log('Ir a detalle', match); }}
      />

      <Banner
        image={bannerPrincipal}
        styleImage={styles.styleImage}
        title="¡Ven y juega!"
        style={styles.containerBanner}
      />

      <Title
        text="Nuestros complejos deportivos"
        buttonText="Ver todos"
        onPress={() => navigation.navigate('Complexes')}
      />
      <FlatList
        horizontal
        data={complexesMock}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ComplexMiniCard complex={item} />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        ListEmptyComponent={<Text>No hay partidos disponibles</Text>}
      />

      <Title
        text="Partidos disponibles"
        buttonText="Ver todos"
        onPress={() => navigation.navigate('MatchSearch')}
      />
      <FlatList
        horizontal
        data={matchesDisponibles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MatchCard match={item} variant="search" />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        ListEmptyComponent={<Text>No hay partidos disponibles</Text>}
      />

      <Banner
        image={bannerImage}
        title="¡Juega este fin de semana!"
        buttonText="Ver más"
        onPress={() => console.log('Ver más presionado')}
      />

      <Title
        text="Partidos Recomendado"
        buttonText="Ver todos"
        onPress={() => navigation.navigate('Matches')}
      />
      <FlatList
        horizontal
        data={matchesRecomendados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MatchCard match={item} variant="matchmaking" />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        ListEmptyComponent={<Text>No hay partidos Recomendados</Text>}
      />
      <Banner
        image={bannerImage2}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50,
  },
  logo: {
    width: 200,
    height: 35,
  },
  contentContainerStyle: {
    paddingHorizontal: 16,
  },
  contentContainerScroll: {
    paddingBottom: 24,
  },
  styleImage: {
    height: 350,
  },
  containerBanner: {
    marginHorizontal: 0,
    marginVertical: 0,
    borderRadius: 0,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
});
