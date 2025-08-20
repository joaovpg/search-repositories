import Card from "@/components/UI/Card";
import { Link, useSearchParams } from "react-router";

//icons
import BookIcon from "@/assets/Icons/Book.svg?react";
import PeopleIcon from "@/assets/Icons/People.svg?react";
import { useEffect, useMemo } from "react";
import { useSearchUsers } from "@/graphql/search/hooks";
import { queryVar } from "@/graphql/search/state";
import FallbackLoader from "@/components/FallbackLoader";
import { searchUsersAdapter } from "@/graphql/search/adapters";

function Search() {
  const [searchParams] = useSearchParams();
  const { data, loading } = useSearchUsers();

  const search = useMemo(() => searchParams.get("q") ?? "", [searchParams]);

  const userList = useMemo(() => {
    if (data) {
      return searchUsersAdapter(data);
    }
    return [];
  }, [data]);

  useEffect(() => {
    queryVar(search);
  }, [search]);

  if (loading) {
    return <FallbackLoader />;
  }

  return (
    <section>
      <div className="flex gap-6 flex-wrap">
        {userList.map((user) => (
          <Card key={user?.id} className="flex-grow basis-xs">
            <Link
              className="flex gap-2 p-4 h-full"
              to={`/profile/${user?.login}`}
            >
              <img
                className="size-12 object-cover rounded-full"
                src={user?.avatarUrl}
                alt="Foto do perfil do usuário do Github"
              />
              <div className="flex flex-col gap-2">
                <p className="font-bold text-primary">
                  {user?.name}{" "}
                  <span className="font-normal text-text/70">
                    {!!user?.name && "· "}
                    {user?.login}
                  </span>
                </p>
                <p className="text-wrap whitespace-wrap break-all">
                  {user?.bio}
                </p>
                <div className="text-sm text-text/70 flex items-center gap-2">
                  <p>{user?.location}</p>
                  <div
                    className="flex gap-2  items-center"
                    title="Repositórios"
                  >
                    <BookIcon />
                    <span>{user?.repositoriesCount}</span>
                  </div>
                  <div className="flex gap-2 items-center" title="Seguidores">
                    <PeopleIcon />
                    <span>{user?.followersCount}</span>
                  </div>
                </div>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Search;
