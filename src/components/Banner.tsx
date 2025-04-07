import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, ImageSourcePropType, ViewStyle } from 'react-native';

type Props = {
  image: ImageSourcePropType;
  title?: string;
  buttonText?: string;
  onPress?: () => void;
  style?: ViewStyle;
  styleImage?: any
};

const Banner = ({ image, title, buttonText, onPress, style, styleImage }: Props) => {
  return (
    <View style={[styles.container, style]}>
      <Image source={image} style={[styles.image, styleImage]} resizeMode="cover" />
      {(title || buttonText) && (
        <View style={styles.overlay}>
          {title && <Text style={styles.title}>{title}</Text>}
          {buttonText && onPress && (
            <TouchableOpacity style={styles.button} onPress={onPress}>
              <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 20,
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 120,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.17)',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 12,
    flexDirection: 'row',
  },
  title: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default Banner;
