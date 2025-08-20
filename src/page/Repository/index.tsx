//icons
import StarIcon from "@/assets/Icons/Star.svg?react";

import Card from "@/components/UI/Card";
import ProgressBar from "@/components/ProgressBar";
import { useEffect, useMemo, useState } from "react";
import {
  getRepository,
  getRepositoryLanguages,
  getRepositoryReadme,
} from "@/services/repositories";
import type { IRepositoryDetails } from "@/interface/IRepository";
import type { ILanguage } from "@/interface/ILanguage";
import Markdown from "@/components/Markdown";
import FallbackLoader from "@/components/FallbackLoader";
import { formatDate } from "@/utils";
import { useAppParams } from "@/hooks/useAppParams";
import NotFound from "../NotFound";

function Repository() {
  const [repository, setRepository] = useState<IRepositoryDetails>();
  const [languages, setLanguages] = useState<ILanguage>();
  const [markdown, setMarkdown] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const params = useAppParams();

  const repositoryLanguages = useMemo(() => {
    if (!languages) return [];
    const total = Object.values(languages).reduce(
      (acc, value) => acc + value,
      0
    );

    return Object.entries(languages).map(([name, value]) => ({
      name,
      percentage: Math.round((value / total) * 100),
    }));
  }, [languages]);

  useEffect(() => {
    const fetchRepository = async () => {
      try {
        if (!params.username || !params.repository)
          throw new Error("Username or repository not provided");

        setLoading(true);

        const { data } = await getRepository(
          params.username,
          params.repository
        );

        setRepository(data);

        const { data: languages } = await getRepositoryLanguages(
          params.username,
          params.repository
        );

        setLanguages(languages);

        const { data: readme } = await getRepositoryReadme(
          params.username,
          params.repository
        );

        setMarkdown(readme);
      } catch (error) {
        console.error("Error fetching repository:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepository();
  }, [params]);

  if (loading) {
    return <FallbackLoader />;
  }

  if (!repository) {
    return <NotFound />;
  }

  return (
    <section className="flex-grow flex flex-col md:flex-row gap-6 items-start justify-center relative">
      <Card className="w-full md:max-w-[410px] basis-4xs md:sticky top-4">
        <div className="p-4 flex flex-col gap-4">
          <div>
            <h1 className="text-2xl font-bold text-primary hover:decoration-2 hover:underline">
              <a href={repository.html_url}>{repository.name}</a>
            </h1>
            <div className="flex flex-row items-center gap-3 text-text/70">
              <span>atualizado em {formatDate(repository.updated_at)}</span>
              <div
                className="flex gap-2  items-center text-text/70"
                title="Estrelas"
              >
                <StarIcon />
                {repository.stargazers_count}
              </div>
            </div>
            <a
              href={repository.html_url}
              className="decoration-1 underline text-primary text-sm"
            >
              Acessar repositório
            </a>
          </div>

          <p>{repository.description}</p>

          <table>
            <thead>
              <tr>
                <th colSpan={3} className="text-start">
                  Principais linguagens
                </th>
              </tr>
            </thead>
            <tbody>
              {repositoryLanguages.map(({ name, percentage }) => (
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
      <Card className="flex-grow w-full">
        <Markdown>{markdown}</Markdown>
      </Card>
    </section>
  );
}

export default Repository;
