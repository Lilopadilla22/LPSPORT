import * as yup from 'yup';

export const registerSchema = yup.object({
  displayName: yup.string().required('Nombre obligatorio'),
  email: yup.string().email('Email inválido').required('Email obligatorio'),
  password: yup
    .string()
    .min(8, 'Mínimo 8 caracteres')
    .matches(/[A-Z]/, 'Debe tener al menos una mayúscula')
    .matches(/\d/, 'Debe tener al menos un número')
    .required('Contraseña obligatoria'),
  level: yup
    .string()
    .transform(value => value?.toLowerCase())
    .oneOf(['novato', 'intermedio', 'avanzado'], 'Nivel inválido')
    .required('Nivel obligatorio'),
  lastName: yup.string().optional(),
  city: yup.string().optional(),
  age: yup.number().optional(),
  cc: yup.string().optional(),
});

export type RegisterFormData = yup.InferType<typeof registerSchema>;
