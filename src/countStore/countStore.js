import { createStore } from "../store/store";

export const useCountStore = createStore((get, set) => ({
  count: 0,
  increment: () => set((store) => ({ ...store, count: store.count + 1 })),
  decrement: () => set((store) => ({ ...store, count: store.count - 1 })),
}));
