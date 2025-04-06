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
import { useRegisterScreen } from './useRegisterScreen';
import { AuthStackParamList } from '../../../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import CustomToast from '../../../components/CustomToast';
import ChevronLeft from '../../../icons/ChevronLeft';

const RegisterScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    onSubmit,
    toastVisible,
    toastMessage,
    passwordFocused,
    setPasswordFocused,
  } = useRegisterScreen();


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.containerGoBack}>
        <ChevronLeft/>
        <Text style={styles.back}>Volver</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Crear cuenta</Text>

      <Text style={styles.label}>Email *</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="correo@ejemplo.com"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

      <Text style={styles.label}>Nombre *</Text>
      <Controller
        control={control}
        name="displayName"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Nombre"
            style={styles.input}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.displayName && <Text style={styles.error}>{errors.displayName.message}</Text>}

      <Text style={styles.label}>Apellido</Text>
      <Controller
        control={control}
        name="lastName"
        render={({ field: { onChange, value } }) => (
          <TextInput placeholder="Apellido" style={styles.input} onChangeText={onChange} value={value} />
        )}
      />

      <Text style={styles.label}>Ciudad</Text>
      <Controller
        control={control}
        name="city"
        render={({ field: { onChange, value } }) => (
          <TextInput placeholder="Ciudad" style={styles.input} onChangeText={onChange} value={value} />
        )}
      />

      <Text style={styles.label}>Nivel *</Text>
      <Controller
        control={control}
        name="level"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="novato / intermedio / avanzado"
            style={styles.input}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.level && <Text style={styles.error}>{errors.level.message}</Text>}

      <View style={styles.row}>
        <View style={styles.smallInput}>
          <Text style={styles.label}>Edad</Text>
          <Controller
            control={control}
            name="age"
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Edad"
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
              <TextInput
                placeholder="Cédula"
                style={styles.input}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
        </View>
      </View>

      <Text style={styles.label}>Contraseña *</Text>
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <>
            <TextInput
              placeholder="Contraseña"
              style={styles.input}
              secureTextEntry
              onChangeText={onChange}
              value={value}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
            />
            {passwordFocused && (
              <View style={styles.rules}>
                <Text style={getRuleStyle((value ?? '').length >= 8)}>• Mínimo 8 caracteres</Text>
                <Text style={getRuleStyle(/[A-Z]/.test(value))}>• Al menos una mayúscula</Text>
                <Text style={getRuleStyle(/\d/.test(value))}>• Al menos un número</Text>
              </View>
            )}
          </>
        )}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(onSubmit)}
        disabled={isSubmitting}
      >
        <Text style={styles.buttonText}>
          {isSubmitting ? 'Registrando...' : 'Registrarse'}
        </Text>
      </TouchableOpacity>

      <CustomToast visible={toastVisible} message={toastMessage} />
    </ScrollView>
  );
};

const getRuleStyle = (valid: boolean) => ({
  color: valid ? 'green' : 'red',
  fontSize: 12,
});

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
  rules: {
    marginTop: 4,
    marginBottom: 4,
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

export default RegisterScreen;

