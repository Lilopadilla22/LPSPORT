import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import auth from '@react-native-firebase/auth';
import { RegisterFormData, registerSchema } from './Register';
import { User, useUser } from '../../../store/context/userContext';
import { useState } from 'react';
import { saveUserToStorage } from '../../../Utils/storage';
import { useToastStore } from '../../../store/context/toastStore';

export function useRegisterScreen() {
  const { setUser } = useUser();
  const { showToast } = useToastStore();
  const [passwordFocused, setPasswordFocused] = useState(false);

  const setUserWithStorage = (userData: User) => {
    setUser(userData);
    if (!userData.isGuest) {
      saveUserToStorage(userData);
    }
  };

  const {
    control,
    handleSubmit,
    formState,
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema) as any,
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        data.email,
        data.password
      );

      const user = userCredential.user;

      await user.updateProfile({ displayName: data.displayName });

      setUserWithStorage({
        uid: user.uid,
        email: user.email ?? '',
        displayName: data.displayName,
        lastName: data.lastName,
        city: data.city,
        level: data.level,
        age: data.age,
        cc: data.cc,
        isGuest: false,
      });
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        showToast({ message: 'Este correo ya está registrado', type: 'error' });
      } else {
        showToast({ message: 'Ocurrió un error al registrarte', type: 'error' });
      }
    }
  };

  return {
    control,
    handleSubmit,
    formState,
    onSubmit,
    passwordFocused,
    setPasswordFocused,
  };
}
