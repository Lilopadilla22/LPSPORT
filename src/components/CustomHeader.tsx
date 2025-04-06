import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type HeaderProps = {
  title?: string;
  logo?: React.ReactNode;
  city?: string;
};

const CustomHeader = ({ title = 'LPSPORT', logo, city = 'Ciudad sin asignar' }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
      {logo || <Text style={styles.title}>{title}</Text>}
      </View>
      {<Text style={styles.city}>{city}</Text>}
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 6,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  city: {
    fontSize: 14,
    color: '#666',
  },
});
