import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import auth from '@react-native-firebase/auth';
import { RegisterFormData, registerSchema } from './Register';
import { useState } from 'react';
import { saveUserToStorage } from '../../../Utils/storage';
import { useToastStore } from '../../../store/context/toastStore';
import { useUserStore } from '../../../store/context/userStore';

export function useRegisterScreen() {
  const setUser = useUserStore(state => state.setUser);
  const { showToast } = useToastStore();
  const [passwordFocused, setPasswordFocused] = useState(false);

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

      const userData = {
        uid: user.uid,
        email: user.email ?? '',
        displayName: data.displayName,
        lastName: data.lastName,
        city: data.city,
        level: data.level,
        age: data.age,
        cc: data.cc,
        isGuest: false,
      };

      setUser(userData);
      await saveUserToStorage(userData);

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
