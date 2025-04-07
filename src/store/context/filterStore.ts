import { create } from 'zustand';

type FilterState = {
  level: 'novato' | 'intermedio' | 'avanzado' | null;
  city: string | null;
  setLevel: (level: FilterState['level']) => void;
  setCity: (city: string | null) => void;
  resetFilters: () => void;
};

export const useFilterStore = create<FilterState>((set) => ({
  level: null,
  city: null,
  setLevel: (level) => set({ level }),
  setCity: (city) => set({ city }),
  resetFilters: () => set({ level: null, city: null }),
}));
