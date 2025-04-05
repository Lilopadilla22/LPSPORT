import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import auth from '@react-native-firebase/auth';
import { RegisterFormData, registerSchema } from './Register';
import { useUser } from '../../../store/context/userContext';
import { useState } from 'react';

export function useRegisterScreen() {
  const { setUser } = useUser();
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
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

      setUser({
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
        setToastMessage('Este correo ya está registrado');
        setToastVisible(true);
      } else {
        setToastMessage('Ocurrió un error al registrarte');
        setToastVisible(true);
      }
    }
  };

  return {
    control,
    handleSubmit,
    formState,
    onSubmit,
    toastVisible,
    toastMessage,
    setToastVisible,
    passwordFocused,
    setPasswordFocused,
  };
}
