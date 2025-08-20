import { useSearchParams } from "react-router";
import { useMemo } from "react";
import { useSearchUsers } from "@/graphql/search/hooks";
import { queryVar } from "@/graphql/search/state";
import FallbackLoader from "@/components/FallbackLoader";
import CardUser from "./CardUser";

function Search() {
  const [searchParams] = useSearchParams();
  const { data, loading } = useSearchUsers();
  const search = useMemo(() => searchParams.get("q") ?? "", [searchParams]);
  queryVar(search);

  if (!search) {
    return (
      <section className="flex flex-col items-center justify-center flex-grow">
        <h1
          className="text-5xl md:text-6xl max-w-[1000px] leading-14 font-black text-center mb-4"
          data-testid="query-empty-test"
        >
          Encontre usuários do GitHub rapidamente.
          <br />
        </h1>
        <p className="linear-animate text-4xl md:text-5xl text-center">
          Digite um nome ou login para começar a busca e explorar perfis
          públicos.
        </p>
      </section>
    );
  }

  if (loading) {
    return <FallbackLoader />;
  }

  return (
    <section>
      <div className="flex gap-6 flex-wrap">
        {data.length === 0 ? (
          <p className="text-center text-text/70 flex-grow text-2xl">
            Nenhum usuário encontrado para a busca:
            <br />
            <span className="font-bold">{search}</span>
          </p>
        ) : (
          data.map((user) => (
            <CardUser
              key={user?.id}
              avatarUrl={user?.avatarUrl}
              followersCount={user?.followersCount}
              login={user?.login}
              repositoriesCount={user?.repositoriesCount}
              bio={user?.bio}
              location={user?.location}
              name={user?.name}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default Search;
