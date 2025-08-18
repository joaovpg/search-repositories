import GithubIcon from "@/assets/Icons/Github.svg?react";
import { NavLink } from "react-router";
import ThemeSelector from "@/components/ThemeSelector";

function Navbar() {
  return (
    <header className="flex justify-center p-4 border-b border-text/10">
      <nav className="max-w-[1200px] w-full grid grid-cols-3">
        <NavLink to="/" className="flex items-center gap-2" title="Home">
          <GithubIcon />
          <span>/</span>
          <span>search-repositories</span>
        </NavLink>
        <div className="border border-text/10 w-full px-4 py-2 rounded-xl">
          <span>Buscador</span>
        </div>
        <div className="justify-self-end">
          <ThemeSelector />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
