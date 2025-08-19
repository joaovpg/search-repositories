import Combobox from "@/components/UI/Combobox";
import Card from "@/components/UI/Card";
import { Link, useParams } from "react-router";

//icons
import AtIcon from "@/assets/Icons/Email.svg?react";
import StarIcon from "@/assets/Icons/Star.svg?react";
import PeopleIcon from "@/assets/Icons/People.svg?react";
import { useEffect } from "react";
import { useGetUser } from "@/graphql/user/hooks";
import { userVar } from "@/graphql/user/state";
import FallbackLoader from "@/components/FallbackLoader";

function Profile() {
  const { username } = useParams<{ username: string }>();
  const { data, loading } = useGetUser();

  useEffect(() => {
    if (!username) return;
    userVar(username);
  }, [username]);

  if (loading) {
    return <FallbackLoader />;
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <aside className="p-6 flex flex-col gap-4">
        <img
          className="w-full object-cover rounded-full"
          src={data?.user.avatarUrl}
          alt="Foto do perfil do usuário do Github"
        />
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-2xl">{data?.user.name}</h3>
          <p className="text-lg text-text/70">{data?.user.login}</p>
        </div>
        <p>{data?.user.bio}</p>
        <div className="flex gap-2 text-text/70">
          <div className="flex gap-2  items-center" title="Seguidores">
            <PeopleIcon />
            <span>{data?.user.followers.totalCount}</span>
          </div>
          <div className="flex gap-2  items-center" title="Seguindo">
            <PeopleIcon />
            <span>{data?.user.following.totalCount}</span>
          </div>
        </div>
        {data?.user.email && (
          <div className="flex gap-2  items-center text-text/70" title="E-mail">
            <AtIcon />
            <span>{data.user.email}</span>
          </div>
        )}
      </aside>
      <div className="col-span-2">
        <div className="flex flex-col gap-2 py-4">
          <div className="self-end shrink-0">
            <Combobox defaultValue="estrelas-decrescente">
              <Combobox.Trigger>
                Ordenar por: Estrelas (maior para menor)
              </Combobox.Trigger>
              <Combobox.List>
                <Combobox.Option value="ultima-atualizacao">
                  Última atualização (mais recente)
                </Combobox.Option>
                <Combobox.Option value="estrelas-decrescente">
                  Estrelas (maior para menor)
                </Combobox.Option>
                <Combobox.Option value="estrelas-crescente">
                  Estrelas (menor para maior)
                </Combobox.Option>
                <Combobox.Option value="nome">Nome (A → Z)</Combobox.Option>
              </Combobox.List>
            </Combobox>
          </div>
          <div className="flex flex-wrap gap-4">
            {Array.from({ length: 30 }).map((_, index = 0) => (
              <Card key={index} className="flex-grow basis-xs">
                <Link
                  to="repository/notepad_black"
                  className="p-4 flex flex-col gap-2"
                >
                  <div className="flex justify-between">
                    <h4 className="font-bold text-primary">notepad-black</h4>
                    <span className="text-text/70">16/08/2025</span>
                  </div>
                  <p>
                    A notepad developed by me to practice and learn the C
                    language and its C ++ / C # variants, I was inspired by the
                    dark mode of the windows.
                  </p>
                  <div className="flex flex-row gap-4">
                    <div
                      className="flex gap-2  items-center text-text/70"
                      title="Linguagem mais utilizada"
                    >
                      <div className="size-5 bg-primary rounded-full" />
                      React
                    </div>
                    <div
                      className="flex gap-2  items-center text-text/70"
                      title="Estrelas"
                    >
                      <StarIcon />
                      700
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
