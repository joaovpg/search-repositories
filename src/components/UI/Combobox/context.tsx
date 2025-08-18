import { createContext, useContext } from "react";

export type ComboboxContextType = {
  selected: string | undefined;
  setSelected: (value: string) => void;
  isOpen: boolean;
  toggleOpen: () => void;
};

export const ComboboxContext = createContext<ComboboxContextType>({
  selected: "",
  setSelected: () => {},
  isOpen: false,
  toggleOpen: () => {},
});

export function useComboboxContext() {
  return useContext(ComboboxContext);
}
