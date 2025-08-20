//icons
import StarIcon from "@/assets/Icons/Star.svg?react";
import LanguageCircle from "@/components/LanguageCircle";
import TextIcon from "@/components/TextIcon";

import Card from "@/components/UI/Card";
import { Link } from "react-router";

interface RepositoryCardProps {
  name: string;
  description: string | null;
  updatedAt: string;
  stargazerCount: number;
  languages?: {
    name: string;
    color: string;
  };
}

function RepositoryCard({
  description,
  languages,
  name,
  stargazerCount,
  updatedAt,
}: Readonly<RepositoryCardProps>) {
  return (
    <Card className="flex-grow basis-xs">
      <Link to={`repository/${name}`} className="p-4 flex flex-col gap-2">
        <div className="flex justify-between">
          <h4 className="font-bold text-primary">{name}</h4>
          <span className="text-text/70">{updatedAt}</span>
        </div>
        {description && <p>{description}</p>}
        <div className="flex flex-row gap-4">
          {languages && (
            <TextIcon
              title="Linguagem mais utilizada"
              icon={<LanguageCircle color={languages.color} />}
            >
              {languages.name}
            </TextIcon>
          )}
          <TextIcon title="Estrelas" icon={<StarIcon />}>
            {stargazerCount}
          </TextIcon>
        </div>
      </Link>
    </Card>
  );
}

export default RepositoryCard;
