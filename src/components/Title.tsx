import React from 'react';
import { Text, StyleSheet, View, TextStyle, ViewStyle } from 'react-native';

type Props = {
  text: string;
  style?: TextStyle;
  containerStyle?: ViewStyle;
};

const Title = ({ text, style, containerStyle }: Props) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title, style]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#061730',
  },
});

export default Title;
