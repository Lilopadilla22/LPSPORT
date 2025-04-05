import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  visible: boolean;
  message: string;
  type?: 'error' | 'success';
}

 const CustomToast = ({ visible, message, type = 'error' }: Props) => {
  if (!visible) {return null;}

  return (
    <View style={[styles.toast, type === 'error' ? styles.error : styles.success]}>
      <Text style={styles.text}>{message}</Text>
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
