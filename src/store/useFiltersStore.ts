import { create } from 'zustand';

export interface AppliedFilter {
  key: string;
  label: string;
  value: string;
}

interface FiltersState {
  appliedFilters: AppliedFilter[];

  addFilter: (filter: AppliedFilter) => void;
  removeFilter: (value: string) => void;
  clearFilters: () => void;
}

export const useFiltersStore = create<FiltersState>((set) => ({
  appliedFilters: [],

  addFilter: (filter) =>
    set((state) => {
      const exists = state.appliedFilters.some(
        (f) => f.key === filter.key && f.value === filter.value,
      );
      if (exists) return state;

      return {
        appliedFilters: [...state.appliedFilters, filter],
      };
    }),

  removeFilter: (value) =>
    set((state) => ({
      appliedFilters: state.appliedFilters.filter((f) => f.value !== value),
    })),

  clearFilters: () => set({ appliedFilters: [] }),
}));
