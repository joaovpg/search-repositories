import { useState, type ReactNode, useMemo, useCallback } from "react";
import { ComboboxContext, type ComboboxContextType } from "./context";
import Trigger from "./trigger";
import List from "./list";
import Option from "./option";

type ComboboxProps = {
  value?: string; // se vier, é controlled
  defaultValue?: string; // fallback quando uncontrolled
  onChange?: (value: string) => void;
  children: ReactNode;
};

function Combobox({
  value,
  defaultValue,
  onChange,
  children,
}: Readonly<ComboboxProps>) {
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");
  const [isOpen, setIsOpen] = useState(false);

  const isControlled = useMemo(() => value !== undefined, [value]);

  const selected = useMemo(
    () => (isControlled ? value : internalValue),
    [isControlled, value, internalValue]
  );

  const handleSelect = useCallback(
    (val: string) => {
      if (!isControlled) setInternalValue(val);
      onChange?.(val);
      setIsOpen(false);
    },
    [isControlled, onChange]
  );

  const toggleOpen = useCallback(() => {
    setIsOpen((o) => !o);
  }, []);

  const contextValue: ComboboxContextType = useMemo(
    () => ({
      selected,
      setSelected: handleSelect,
      isOpen,
      toggleOpen,
    }),
    [selected, handleSelect, isOpen, toggleOpen]
  );

  return (
    <ComboboxContext.Provider value={contextValue}>
      <div className="relative">{children}</div>
    </ComboboxContext.Provider>
  );
}

Combobox.Trigger = Trigger;
Combobox.List = List;
Combobox.Option = Option;

export default Combobox;
