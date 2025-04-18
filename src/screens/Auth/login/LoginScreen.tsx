import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import { Controller } from 'react-hook-form';
import { useLoginScreen } from './useLoginScreen';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../../navigation/types';
import ChevronLeft from '../../../icons/ChevronLeft';
import EyeOpen from '../../../icons/EyeOpen';
import EyeClosed from '../../../icons/EyeClosed';
import { useUserStore } from '../../../store/context/userStore';


const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    onSubmit,
  } = useLoginScreen();

  const setGuestUser = useUserStore(state => state.setGuestUser);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.containerGoBack}>
        <ChevronLeft />
        <Text style={styles.back}>Volver</Text>
      </TouchableOpacity>

      <Image
        source={require('../../../../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.label}>Email</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="correo@ejemplo.com"
            style={styles.input}
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

      <Text style={styles.label}>Contraseña</Text>
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Contraseña"
              style={styles.inputPasswrod}
              secureTextEntry={!showPassword}
              onChangeText={onChange}
              value={value}
            />
            <Pressable style={styles.eye} onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <EyeOpen width={24} height={24} />
              ) : (
                <EyeClosed width={24} height={24} />
              )}
            </Pressable>
          </View>
        )}
      />
      {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

      <TouchableOpacity
        style={styles.buttonPrimary}
        onPress={handleSubmit(onSubmit)}
        disabled={isSubmitting}
      >
        <Text style={styles.buttonText}>
          {isSubmitting ? 'Cargando...' : 'Ingresar'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonOutline}
        onPress={setGuestUser}
      >
        <Text style={styles.buttonOutlineText}>Ingresar como invitado</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.bottomText}>
          ¿No tienes cuenta?{' '}
          <Text style={styles.link}>Regístrate</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  back: { fontSize: 16, color: '#000', marginBottom: 20 },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 70,
    overflow: 'hidden',
    alignSelf: 'center',
    marginBottom: 24,
    backgroundColor: '#fff',
  },
  label: { fontWeight: 'bold', marginTop: 10, marginBottom: 4 },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 12,
    marginBottom: 4,
  },
  inputPasswrod: {
    flex: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 12,
    marginBottom: 4,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    marginBottom: 4,
  },
  eye: {
    marginHorizontal: 15,
  },
  buttonPrimary: {
    backgroundColor: '#000000',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  buttonOutline: {
    borderColor: '#000000',
    borderWidth: 2,
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 14,
  },
  buttonOutlineText: {
    color: '#000000',
    fontWeight: 'bold',
  },
  bottomText: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 14,
  },
  link: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 4,
  },
  containerGoBack: {
    flexDirection: 'row',
  },
});

export default LoginScreen;
