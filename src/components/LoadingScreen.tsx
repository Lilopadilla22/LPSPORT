import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const IMAGE_1 = require('../../assets/ballonL.png');
const IMAGE_2 = require('../../assets/ballonR.png');

const LoadingScreen = () => {
  const [isFirstImage, setIsFirstImage] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFirstImage(prev => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const image = isFirstImage ? IMAGE_1 : IMAGE_2;

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="contain" />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 160,
    height: 160,
  },
});
