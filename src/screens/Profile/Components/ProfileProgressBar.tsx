import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { User } from '../../../store/context/userStore';


const getProgress = (user: User | null) => {
  if (!user) {return 0;}

  const total = 6;
  let filled = 0;

  if (user.displayName) {filled++;}
  if (user.lastName) {filled++;}
  if (user.city) {filled++;}
  if (user.level) {filled++;}
  if (user.age) {filled++;}
  if (user.cc) {filled++;}

  return (filled / total) * 100;
};

const getMessage = (progress: number) => {
  if (progress === 100) {return '¡Perfil completo! Estás listo para jugar 🎉';}
  if (progress >= 50) {return '¡Ya casi! Solo faltan algunos datos';}
  return 'Completa tu perfil para mejorar la experiencia';
};

type Props = {
  user: User | null;
};

const ProfileProgressBar = ({ user }: Props) => {
  const progress = getProgress(user);
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: progress,
      duration: 800,
      useNativeDriver: false,
    }).start();
  }, [animatedValue, progress]);

  const widthInterpolated = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{getMessage(progress)}</Text>
      <View style={styles.barContainer}>
        <Animated.View style={[styles.bar, { width: widthInterpolated }]} />
      </View>
      <Text style={styles.percentage}>{Math.round(progress)}%</Text>
    </View>
  );
};

export default ProfileProgressBar;

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    marginBottom: 16,
  },
  message: {
    marginBottom: 6,
    fontSize: 14,
    color: '#444',
  },
  barContainer: {
    height: 12,
    backgroundColor: '#eee',
    borderRadius: 6,
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
    backgroundColor: '#469b89',
    borderRadius: 6,
  },
  percentage: {
    marginTop: 4,
    fontSize: 12,
    color: '#666',
  },
});
