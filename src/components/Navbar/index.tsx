import { NavLink } from "react-router";
import ThemeSelector from "@/components/ThemeSelector";
import SearchUsers from "@/components/SearchUsers";

//icons
import GithubIcon from "@/assets/Icons/Github.svg?react";

function Navbar() {
  return (
    <header className="flex justify-center p-4 border-b border-text/10">
      <nav className="max-w-[1200px] w-full flex justify-between md:grid md:grid-cols-3">
        <div className="flex items-center md:col-span-1">
          <NavLink
            to="/"
            className="inline-flex items-center gap-2"
            title="Home"
          >
            <GithubIcon />
            <span>/</span>
            <span>search-repositories</span>
          </NavLink>
        </div>
        <div className="flex flex-row-reverse gap-1 md:gap-0 md:grid md:col-span-2 md:grid-cols-2 md:flex-row ">
          <SearchUsers />
          <div className="justify-self-end">
            <ThemeSelector />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
