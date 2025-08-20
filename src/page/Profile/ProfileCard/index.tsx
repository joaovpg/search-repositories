//icons
import AtIcon from "@/assets/Icons/Email.svg?react";
import PeopleIcon from "@/assets/Icons/People.svg?react";

interface ProfileCardProps {
  name: string;
  login: string;
  bio: string;
  avatarUrl: string;
  followers: number;
  following: number;
  email?: string;
}

function ProfileCard({
  avatarUrl,
  bio,
  followers,
  following,
  login,
  name,
  email,
}: Readonly<ProfileCardProps>) {
  return (
    <aside className="p-6 flex flex-col gap-4">
      <img
        className="w-full object-cover rounded-full"
        src={avatarUrl}
        alt="Foto do perfil do usuário do Github"
      />
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-2xl">{name}</h3>
        <p className="text-lg text-text/70">{login}</p>
      </div>
      <p>{bio}</p>
      <div className="flex gap-2 text-text/70">
        <div className="flex gap-2  items-center" title="Seguidores">
          <PeopleIcon />
          <span>{followers}</span>
        </div>
        <div className="flex gap-2  items-center" title="Seguindo">
          <PeopleIcon />
          <span>{following}</span>
        </div>
      </div>
      {email && (
        <div className="flex gap-2  items-center text-text/70" title="E-mail">
          <AtIcon />
          <span>{email}</span>
        </div>
      )}
    </aside>
  );
}

export default ProfileCard;
