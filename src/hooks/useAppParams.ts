import { useParams } from "react-router";

export function useAppParams() {
  const { username, repository } = useParams<{
    username: string;
    repository: string;
  }>();

  return {
    username,
    repository,
  };
}
