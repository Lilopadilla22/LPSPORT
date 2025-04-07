import * as yup from 'yup';

export const accountSchema = yup.object({
  displayName: yup.string().required('Nombre obligatorio'),
  email: yup.string().email('Email inválido').required('Email obligatorio'),
  level: yup
    .string()
    .transform(value => value?.toLowerCase())
    .oneOf(['novato', 'intermedio', 'avanzado'], 'Nivel inválido')
    .required('Nivel obligatorio'),
    lastName: yup.string().optional().default(undefined),
    city: yup.string().optional().default(undefined),
    age: yup.number().optional().default(undefined),
    cc: yup.string().optional().default(undefined),
});


export type MyAccountFormData = yup.InferType<typeof accountSchema>;
