import { create } from 'zustand';

export type ToastType = 'success' | 'error';

interface ToastState {
  toastVisible: boolean;
  toastMessage: string;
  toastType: ToastType;
  showToast: (payload: { message: string; type?: ToastType }) => void;
  hideToast: () => void;
}

export const useToastStore = create<ToastState>((set) => ({
  toastVisible: false,
  toastMessage: '',
  toastType: 'error',
  showToast: ({ message, type = 'error' }) =>
    set({
      toastVisible: true,
      toastMessage: message,
      toastType: type,
    }),
  hideToast: () =>
    set({
      toastVisible: false,
      toastMessage: '',
      toastType: 'error',
    }),
}));
