import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useToastStore } from '../store/context/toastStore';


const CustomToast = () => {
  const { toastVisible, toastMessage, toastType, hideToast } = useToastStore();

  useEffect(() => {
    if (toastVisible) {
      const timer = setTimeout(() => {
        hideToast();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toastVisible, hideToast]);

  if (!toastVisible) {return null;}

  return (
    <View style={[styles.toast, toastType === 'error' ? styles.error : styles.success]}>
      <Text style={styles.text}>{toastMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  toast: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
    padding: 14,
    borderRadius: 8,
    zIndex: 999,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  error: {
    backgroundColor: '#E53935',
  },
  success: {
    backgroundColor: '#43A047',
  },
});

export default CustomToast;
