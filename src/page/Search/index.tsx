import Card from "@/components/UI/Card";
import { Link } from "react-router";

//icons
import BookIcon from "@/assets/Icons/Book.svg?react";
import PeopleIcon from "@/assets/Icons/People.svg?react";

function Search() {
  return (
    <section>
      <div className="flex gap-6 flex-wrap">
        {Array.from({ length: 30 }).map((_, index = 0) => (
          <Card key={index} className="flex-grow basis-xs">
            <Link className="flex gap-2 p-4" to="/profile/joaovpg">
              <img
                className="size-12 object-cover rounded-full"
                src="https://thispersondoesnotexist.com/"
                alt="Foto do perfil do usuário do Github"
              />
              <div className="flex flex-col gap-2">
                <p className="font-bold text-primary">
                  João Victor{" "}
                  <span className="font-normal text-text/70">- joaovpg</span>
                </p>
                <p>Software designer</p>
                <div className="text-sm text-text/70 flex items-center gap-2">
                  <p>Brasília, DF · usuário</p>
                  <div
                    className="flex gap-2  items-center"
                    title="Repositórios"
                  >
                    <BookIcon />
                    <span>722</span>
                  </div>
                  <div className="flex gap-2 items-center" title="Seguidores">
                    <PeopleIcon />
                    <span>71</span>
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
