import { create } from "zustand";

interface CentralStore {
  total: number;
  setTotal: (value: number) => void;
}

export const useCentralStore = create<CentralStore>((set) => ({
  total: 0,
  setTotal: (value) => set({ total: value }),
}));
