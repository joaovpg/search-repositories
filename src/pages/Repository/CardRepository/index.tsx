//icons
import StarIcon from "@/assets/Icons/Star.svg?react";
import ProgressBar from "@/components/ProgressBar";

import TextIcon from "@/components/TextIcon";
import Card from "@/components/UI/Card";
import { formatDate } from "@/utils";

interface CardRepositoryProps {
  repositoryUrl: string;
  name: string;
  updatedAt: string;
  description: string;
  starsCount: number;
  languages: { name: string; percentage: number }[];
}

function CardRepository({
  description,
  name,
  repositoryUrl,
  starsCount,
  updatedAt,
  languages,
}: Readonly<CardRepositoryProps>) {
  return (
    <Card className="w-full md:max-w-[410px] basis-4xs md:sticky top-4">
      <div className="p-4 flex flex-col gap-4">
        <div>
          <h1 className="text-2xl font-bold text-primary hover:decoration-2 hover:underline">
            <a href={repositoryUrl} className="break-all">
              {name}
            </a>
          </h1>
          <div className="flex flex-row items-center gap-3 text-text/70">
            <span>atualizado em {formatDate(updatedAt)}</span>
            <TextIcon icon={<StarIcon />} title="Quantidade de estrelas">
              {starsCount}
            </TextIcon>
          </div>
          <a
            href={repositoryUrl}
            className="decoration-1 underline text-primary text-sm"
          >
            Acessar repositório
          </a>
        </div>

        <p>{description}</p>

        <table>
          <thead>
            <tr>
              <th colSpan={3} className="text-start">
                Principais linguagens
              </th>
            </tr>
          </thead>
          <tbody>
            {languages.map(({ name, percentage }) => (
              <tr key={`${name}-${percentage}`}>
                <td>
                  <div className="flex gap-2 items-center">{name}</div>
                </td>
                <td>
                  <div className="ml-auto px-4 w-[150px]">
                    <ProgressBar value={Number(percentage)} />
                  </div>
                </td>
                <td>{percentage}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export default CardRepository;
