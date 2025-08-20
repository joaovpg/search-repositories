import FallbackLoader from "@/components/FallbackLoader";
import { useGetRepositories } from "@/graphql/profile/hooks";
import type { RepositoryOrderBy } from "@/graphql/profile/types";
import { useState } from "react";
import OrderBy from "./OrderBy";
import RepositoryCard from "./RepositoryCard";
import RepositoriesNotFound from "./RepositoriesNotFound";

const repositoryObj: Record<
  string,
  { repositoryOrder: RepositoryOrderBy; label: string }
> = {
  "ultima-atualizacao": {
    repositoryOrder: { direction: "DESC", field: "UPDATED_AT" },
    label: "Última atualização (mais recente)",
  },
  "estrelas-decrescente": {
    repositoryOrder: { direction: "DESC", field: "STARGAZERS" },
    label: "Estrelas (maior para menor)",
  },
  "estrelas-crescente": {
    repositoryOrder: { direction: "ASC", field: "STARGAZERS" },
    label: "Estrelas (menor para maior)",
  },
  nome: {
    repositoryOrder: { direction: "ASC", field: "NAME" },
    label: "Nome (A → Z)",
  },
};

function RepositoryList() {
  const [orderBy, setOrderBy] = useState<string>("estrelas-decrescente");
  const { data, loading } = useGetRepositories(
    repositoryObj[orderBy].repositoryOrder
  );

  const handleOrderChange = (value: string) => {
    setOrderBy(value);
  };

  return (
    <div className="flex flex-col gap-2 py-4">
      <div className="self-end shrink-0">
        <OrderBy
          label={repositoryObj[orderBy].label}
          onChangeOrderBy={handleOrderChange}
          orderBy={orderBy}
        />
      </div>
      <div className="flex flex-wrap gap-4">
        {loading && <FallbackLoader className="py-20" />}{" "}
        {!loading && data.length === 0 ? (
          <RepositoriesNotFound />
        ) : (
          data.map((repository) => (
            <RepositoryCard
              key={repository.id}
              description={repository.description ?? ""}
              name={repository.name}
              stargazerCount={repository.stargazerCount}
              updatedAt={repository.updatedAt}
              languages={repository.languages}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default RepositoryList;
