import type { ILanguage } from "@/interface/ILanguage";
import type { IRepositoryDetails } from "@/interface/IRepository";
import {
  getRepository,
  getRepositoryLanguages,
  getRepositoryReadme,
} from "@/services/repositories";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router";

export function useFetchRepositoryData() {
  const [repository, setRepository] = useState<IRepositoryDetails>();
  const [languages, setLanguages] = useState<ILanguage>();
  const [markdown, setMarkdown] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const params = useParams();

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

  const getMarkdown = async (username: string, repository: string) => {
    try {
      const { data: readme } = await getRepositoryReadme(username, repository);

      setMarkdown(readme);
    } catch {
      setMarkdown("");
    }
  };

  useEffect(() => {
    const fetchRepository = async () => {
      try {
        const { username, repository } = params;
        setIsError(false);

        if (!username || !repository)
          throw new Error("Username or repository not provided");

        setIsLoading(true);

        const { data } = await getRepository(username, repository);

        setRepository(data);

        const { data: languages } = await getRepositoryLanguages(
          username,
          repository
        );

        setLanguages(languages);

        await getMarkdown(username, repository);
      } catch (error) {
        setIsError(true);
        console.error("Error fetching repository:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepository();
  }, [params]);

  return {
    repository,
    repositoryLanguages,
    markdown,
    isLoading,
    isError,
  };
}
