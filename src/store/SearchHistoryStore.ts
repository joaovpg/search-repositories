import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type SearchHistoryStore = {
  queryHistory: string[];
  pushHistory: (query: string) => void;
};
export const useSearchHistoryStore = create<SearchHistoryStore>()(
  persist(
    (set, get) => ({
      queryHistory: [],
      pushHistory: (query) => {
        const currentHistory = get().queryHistory;
        if (currentHistory.includes(query) || !query.trim()) {
          return;
        }

        const newHistory = [query, ...currentHistory].slice(0, 5);

        set({ queryHistory: newHistory });
      },
    }),
    {
      name: "searchHistory",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
