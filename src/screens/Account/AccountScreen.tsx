import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Controller } from 'react-hook-form';
import ChevronLeft from '../../icons/ChevronLeft';
import { useNavigation } from '@react-navigation/native';
import { useAccount } from './useAccount';


const AccountScreen = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
  } = useAccount();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.containerGoBack}>
        <ChevronLeft/>
        <Text style={styles.back}>Volver</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Mi cuenta</Text>

      <Text style={styles.label}>Email</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { value } }) => (
          <TextInput
            style={[styles.input, styles.disabledInput]}
            value={value}
            editable={false}
          />
        )}
      />

      <Text style={styles.label}>Nombre</Text>
      <Controller
        control={control}
        name="displayName"
        render={({ field: { onChange, value } }) => (
          <TextInput style={styles.input} onChangeText={onChange} value={value} />
        )}
      />
      {errors.displayName && <Text style={styles.error}>{errors.displayName.message}</Text>}

      <Text style={styles.label}>Apellido</Text>
      <Controller
        control={control}
        name="lastName"
        render={({ field: { onChange, value } }) => (
          <TextInput style={styles.input} onChangeText={onChange} value={value} />
        )}
      />

      <Text style={styles.label}>Ciudad</Text>
      <Controller
        control={control}
        name="city"
        render={({ field: { onChange, value } }) => (
          <TextInput style={styles.input} onChangeText={onChange} value={value} />
        )}
      />

      <Text style={styles.label}>Nivel</Text>
      <Controller
        control={control}
        name="level"
        render={({ field: { onChange, value } }) => (
          <TextInput style={styles.input} onChangeText={onChange} value={value} />
        )}
      />

      <View style={styles.row}>
        <View style={styles.smallInput}>
          <Text style={styles.label}>Edad</Text>
          <Controller
            control={control}
            name="age"
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                onChangeText={text => onChange(Number(text))}
                value={value ? value.toString() : ''}
              />
            )}
          />
        </View>
        <View style={styles.largeInput}>
          <Text style={styles.label}>Cédula</Text>
          <Controller
            control={control}
            name="cc"
            render={({ field: { onChange, value } }) => (
              <TextInput style={styles.input} onChangeText={onChange} value={value} />
            )}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(onSubmit)}
        disabled={isSubmitting}
      >
        <Text style={styles.buttonText}>{isSubmitting ? 'Guardando...' : 'Guardar cambios'}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  back: {
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    marginTop: 10,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 12,
  },
  disabledInput: {
    backgroundColor: '#eee',
    color: '#666',
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
  button: {
    marginTop: 24,
    backgroundColor: '#000',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    gap: 10,
  },
  smallInput: {
    flex: 3,
  },
  largeInput: {
    flex: 7,
  },
  containerGoBack: {
    flexDirection: 'row',
  },
});

export default AccountScreen;
