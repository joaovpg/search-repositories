import Card from "@/components/UI/Card";
import { Link, useSearchParams } from "react-router";

//icons
import BookIcon from "@/assets/Icons/Book.svg?react";
import PeopleIcon from "@/assets/Icons/People.svg?react";
import { useEffect, useMemo } from "react";
import { useSearchUsers } from "@/graphql/search/hooks";
import { queryVar } from "@/graphql/search/state";
import FallbackLoader from "@/components/FallbackLoader";

function Search() {
  const [searchParams] = useSearchParams();
  const { data, loading } = useSearchUsers();

  const search = useMemo(() => searchParams.get("q") ?? "", [searchParams]);

  useEffect(() => {
    queryVar(search);
  }, [search]);

  if (loading) {
    return <FallbackLoader />;
  }

  return (
    <section>
      <div className="flex gap-6 flex-wrap">
        {data?.search.edges.map(
          ({
            node: {
              id,
              avatarUrl,
              followers,
              repositories,
              location,
              bio,
              name,
              login,
            },
          }) => (
            <Card key={id} className="flex-grow basis-xs">
              <Link className="flex gap-2 p-4 h-full" to={`/profile/${login}`}>
                <img
                  className="size-12 object-cover rounded-full"
                  src={avatarUrl}
                  alt="Foto do perfil do usuário do Github"
                />
                <div className="flex flex-col gap-2">
                  <p className="font-bold text-primary">
                    {name}{" "}
                    <span className="font-normal text-text/70">
                      {!!name && "· "}
                      {login}
                    </span>
                  </p>
                  <p className="text-wrap whitespace-wrap break-all">{bio}</p>
                  <div className="text-sm text-text/70 flex items-center gap-2">
                    <p>{location}</p>
                    <div
                      className="flex gap-2  items-center"
                      title="Repositórios"
                    >
                      <BookIcon />
                      <span>{repositories.totalCount}</span>
                    </div>
                    <div className="flex gap-2 items-center" title="Seguidores">
                      <PeopleIcon />
                      <span>{followers.totalCount}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </Card>
          )
        )}
      </div>
    </section>
  );
}

export default Search;
