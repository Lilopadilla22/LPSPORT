import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import auth from '@react-native-firebase/auth';
import { LoginFormData } from './Login';
import { useToastStore } from '../../../store/context/toastStore';
import { useUserStore } from '../../../store/context/userStore';
import { saveUserToStorage } from '../../../Utils/storage';

const schema = yup.object({
  email: yup
    .string()
    .email('El email no es válido')
    .required('El email es obligatorio'),
  password: yup
    .string()
    .required('La contraseña es obligatoria')
    .min(8, 'La contraseña debe tener al menos 8 caracteres'),
});

export function useLoginScreen() {
  const setUser = useUserStore(state => state.setUser);
  const { showToast } = useToastStore();

  const {
    control,
    handleSubmit,
    formState,
  } = useForm<LoginFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        data.email,
        data.password
      );

      const user = userCredential.user;

      const userData = {
        uid: user.uid,
        email: user.email ?? '',
        displayName: user.displayName ?? '',
        isGuest: false,
      };

      setUser(userData);
      await saveUserToStorage(userData);

    } catch (error: any) {
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        showToast({
          message: 'Email o contraseña incorrectos',
          type: 'error',
        });
      } else {
        showToast({
          message: 'Ocurrió un error inesperado al iniciar sesión',
          type: 'error',
        });
        console.error('Login error:', error);
      }
    }
  };


  return {
    control,
    handleSubmit,
    formState,
    onSubmit,
  };
}
