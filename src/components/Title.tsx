import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  text: string;
  buttonText?: string;
  onPress?: () => void;
};

const Title = ({ text, buttonText, onPress }: Props) => (
  <View style={styles.container}>
    <Text style={styles.title}>{text}</Text>
    {buttonText && onPress && (
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.button}>{buttonText}</Text>
      </TouchableOpacity>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: { fontSize: 18, fontWeight: 'bold' },
  button: { fontSize: 14, color: '#469b89' },
});

export default Title;

