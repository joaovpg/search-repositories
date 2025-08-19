import type { PropsWithChildren } from "react";
import { useComboboxContext } from "./context";

function List({ children }: Readonly<PropsWithChildren>) {
  const { isOpen } = useComboboxContext();
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 bg-bg border border-text/10 rounded-lg shadow-md mt-2 p-4 z-10">
      <ul className="flex flex-col gap-1">{children}</ul>
    </div>
  );
}

export default List;
