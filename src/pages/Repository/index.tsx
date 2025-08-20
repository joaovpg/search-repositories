import Card from "@/components/UI/Card";
import Markdown from "@/components/Markdown";
import FallbackLoader from "@/components/FallbackLoader";
import NotFound from "../NotFound";
import CardRepository from "./CardRepository";
import { useFetchRepositoryData } from "./useFetchRepositoryData";
import ReadmeNotFound from "./ReadmeNotFound";

function Repository() {
  const { isError, isLoading, markdown, repository, repositoryLanguages } =
    useFetchRepositoryData();

  if (isLoading) {
    return <FallbackLoader />;
  }

  if (isError || !repository) {
    return <NotFound />;
  }

  return (
    <section className="flex-grow flex flex-col md:flex-row gap-6 items-start justify-center relative">
      <CardRepository
        description={repository.description}
        name={repository.name}
        repositoryUrl={repository.html_url}
        starsCount={repository.stargazers_count}
        updatedAt={repository.updated_at}
        languages={repositoryLanguages}
      />
      <Card className="flex-grow w-full">
        {markdown.length === 0 ? (
          <ReadmeNotFound />
        ) : (
          <Markdown>{markdown}</Markdown>
        )}
      </Card>
    </section>
  );
}

export default Repository;
