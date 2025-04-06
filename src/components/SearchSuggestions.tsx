import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Match } from './types/match';


type Props = {
  matches: Match[];
  onSelect: (match: Match) => void;
  searchTerm: string;
};

const SearchSuggestions = ({ matches, onSelect, searchTerm }: Props) => {
  if (searchTerm.length === 0) {return null;}

  return (
    <View style={styles.suggestionsBox}>
      {matches.length > 0 ? (
        matches.slice(0, 5).map((match) => (
          <TouchableOpacity
            key={match.id}
            onPress={() => onSelect(match)}
            style={styles.suggestionItem}
          >
            <Text style={styles.suggestionText}>{match.title}</Text>
          </TouchableOpacity>
        ))
      ) : (
        <Text style={styles.noResult}>Sin resultados encontrados</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  suggestionsBox: {
    backgroundColor: '#fff',
    borderBottomEndRadius: 10,
    paddingVertical: 4,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  suggestionItem: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  suggestionText: {
    fontSize: 16,
  },
  noResult: {
    padding: 12,
    textAlign: 'center',
    color: '#888',
  },
});

export default SearchSuggestions;
