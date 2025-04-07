import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import auth from '@react-native-firebase/auth';
import { LoginFormData } from './Login';
import { useUser } from '../../../store/context/userContext';
import { useToastStore } from '../../../store/context/toastStore';

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
  const { setUser } = useUser();
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

      setUser({
        uid: user.uid,
        email: user.email ?? '',
        displayName: user.displayName ?? '',
      });
    } catch (error: any) {
      showToast({
        message: 'Tu contraseña o email es incorrecto',
        type: 'error',
      });
    }
  };

  return {
    control,
    handleSubmit,
    formState,
    onSubmit,
  };
}
