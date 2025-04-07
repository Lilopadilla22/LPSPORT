import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import SearchIcon from '../icons/SearchIcon';

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

const SearchBar = ({ value, onChangeText, placeholder = 'Buscar productos' }: SearchBarProps) => {
  return (
    <View style={styles.containerSearch}>
      <View style={styles.innerContainer}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={styles.input}
          placeholderTextColor="#666"
        />
        <TouchableOpacity style={styles.iconContainer}>
          <SearchIcon width={18} height={18} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  containerSearch: {
    backgroundColor: '#d3f3ec',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  innerContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 999,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    elevation: 3,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  iconContainer: {
    backgroundColor: '#d3f3ec',
    borderRadius: 999,
    padding: 8,
    marginLeft: 8,
  },
});
