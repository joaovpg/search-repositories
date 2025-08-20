//icons
import AtIcon from "@/assets/Icons/Email.svg?react";
import PeopleIcon from "@/assets/Icons/People.svg?react";
import TextIcon from "@/components/TextIcon";

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
        <TextIcon icon={<PeopleIcon />} title="Seguidores">
          {followers}
        </TextIcon>
        <TextIcon icon={<PeopleIcon />} title="Seguindo">
          {following}
        </TextIcon>
      </div>
      {email && (
        <TextIcon icon={<AtIcon />} title="E-mail">
          {email}
        </TextIcon>
      )}
    </aside>
  );
}

export default ProfileCard;
