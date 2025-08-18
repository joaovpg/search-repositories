import type { PropsWithChildren } from "react";
import { useComboboxContext } from "./context";

//icons
import DropdownIcon from "@/assets/Icons/Dropdown.svg?react";

function Trigger({ children }: Readonly<PropsWithChildren>) {
  const { toggleOpen } = useComboboxContext();
  return (
    <button
      className="flex items-center p-2 focus:outline-1 focus:outline-text/10 rounded-lg"
      onClick={toggleOpen}
    >
      {children}
      <DropdownIcon className="text-text" />
    </button>
  );
}

export default Trigger;
