import type { PropsWithChildren } from "react";
import { useComboboxContext } from "./context";

type OptionProps = PropsWithChildren & {
  value: string;
};

function Option({ value, children }: Readonly<OptionProps>) {
  const { selected, setSelected } = useComboboxContext();
  const active = selected === value;

  return (
    <li>
      <button
        className={`p-2 hover:bg-text/10 rounded-lg cursor-pointer flex items-center gap-2 ${
          active && "bg-text/10"
        }`}
        onClick={() => setSelected(value)}
      >
        {children}
      </button>
    </li>
  );
}

export default Option;
