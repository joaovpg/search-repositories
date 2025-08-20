//icons
import BookIcon from "@/assets/Icons/Book.svg?react";
import PeopleIcon from "@/assets/Icons/People.svg?react";
import TextIcon from "@/components/TextIcon";

import Card from "@/components/UI/Card";
import { Link } from "react-router";

interface CardUserProps {
  login?: string;
  avatarUrl?: string;
  name?: string;
  bio?: string;
  location?: string;
  repositoriesCount?: number;
  followersCount?: number;
}

function CardUser({
  avatarUrl,
  followersCount,
  login,
  repositoriesCount,
  bio,
  location,
  name,
}: Readonly<CardUserProps>) {
  return (
    <Card className="flex-grow basis-xs">
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
            <TextIcon title="Total de repositórios" icon={<BookIcon />}>
              {repositoriesCount}
            </TextIcon>
            <TextIcon title="Total de seguidores" icon={<PeopleIcon />}>
              {followersCount}
            </TextIcon>
          </div>
        </div>
      </Link>
    </Card>
  );
}

export default CardUser;
