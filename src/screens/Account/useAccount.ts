import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { useUser } from '../../store/context/userContext';
import { useToastStore } from '../../store/context/toastStore';
import { saveUserToStorage } from '../../Utils/storage';
import { accountSchema, MyAccountFormData } from './Account';

export const useAccount = () => {
  const { user, setUser } = useUser();
  const { showToast } = useToastStore();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<MyAccountFormData>({
    defaultValues: {
      email: user?.email ?? '',
      displayName: user?.displayName ?? '',
      lastName: user?.lastName ?? '',
      city: user?.city ?? '',
      level: user?.level ?? 'novato',
      age: user?.age ?? undefined,
      cc: user?.cc ?? '',
    },
    resolver: yupResolver(accountSchema) as any,
  });

  const onSubmit = async (data: MyAccountFormData) => {
    try {
      const updatedUser = {
        ...user,
        ...data,
        uid: user!.uid,
      };

      setUser(updatedUser);
      await saveUserToStorage(updatedUser);
      showToast({ message: 'Perfil actualizado correctamente', type: 'success' });
    } catch (error) {
      showToast({ message: 'Error al actualizar perfil', type: 'error' });
    }
  };

  return {
    control,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
  };
};
