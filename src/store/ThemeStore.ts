import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type Theme = "light" | "dark" | "theme";

type ThemeStore = {
  theme: Theme;
  setTheme: (newTheme: Theme) => void;
};
export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: "theme",
      setTheme: (newTheme) => {
        set({ theme: newTheme });

        document.documentElement.classList.toggle("dark", newTheme === "dark");

        document.documentElement.classList.toggle(
          "light",
          newTheme === "light"
        );
      },
    }),
    {
      name: "theme",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
