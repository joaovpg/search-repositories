//icons
import SearchIcon from "@/assets/Icons/Search.svg?react";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

function SearchUsers() {
  const [isActive, setIsActive] = useState<boolean>(false);

  const [query, setQuery] = useState<string>("");
  const [searchParams] = useSearchParams();
  const search = searchParams.get("q");
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (event?: React.KeyboardEvent<HTMLInputElement>) => {
    if (event?.key === "Escape") {
      setIsActive(false);
      return;
    }
    if (event && event?.key !== "Enter") return;
    event?.preventDefault();
    navigate(`/search?q=${query}`);
    setIsActive(false);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsActive(false);
    }, 200);
  };

  const toggleActive = () => {
    setIsActive((prev) => !prev);
  };

  useEffect(() => {
    if (isActive) {
      inputRef.current?.focus();
    }
  }, [isActive]);

  return (
    <>
      <button
        className="md:border md:border-text/10 w-full md:px-4 py-2 rounded-xl flex items-center gap-3"
        onClick={toggleActive}
        title="Pesquisar usuários"
        type="button"
      >
        <SearchIcon className="text-text/60" />
        <span className="hidden md:block text-text/60">
          {search ?? "Digite o nome do usuário"}
        </span>
      </button>
      {isActive && (
        <div className="shadow-2xl absolute w-full md:w-1/2 md:max-w-[600px] top-0 right-0 md:right-1/2 md:translate-x-1/2 z-10 bg-bg border-border/10 rounded-b-[20px] px-4 py-6 flex items-center gap-3 md:gap-4 transition-all duration-300 ease-in-out">
          <div className="border border-text/10 ring-2 ring-primary ring-offset-4 ring-offset-bg rounded-xl  flex items-center gap-1 w-full">
            <button
              className="p-2"
              onClick={() => handleSearch()}
              title="Enviar pesquisa"
            >
              <SearchIcon className="text-primary" />
            </button>
            <input
              ref={inputRef}
              title="Pesquisar usuários"
              placeholder="Digite o nome do usuário ou login"
              className="flex-grow outline-none py-2 pr-2"
              onBlur={handleBlur}
              onKeyDown={handleSearch}
              onChange={(e) => setQuery(e.target.value.trim())}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default SearchUsers;
