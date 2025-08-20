import { useQuery, useReactiveVar } from "@apollo/client";
import { GET_REPOSITORIES, GET_USER } from "@/graphql/profile/queries";
import { cursorVar, userVar } from "./state";
import type { IUserResponse } from "@/interface/IUser";
import type { RepositoryOrderBy } from "./types";
import { repositoryAdapter, userDetailsAdapter } from "./adapters";

export function useGetUser() {
  const login = useReactiveVar(userVar);

  const queryResults = useQuery<IUserResponse>(GET_USER, {
    variables: { login },
  });

  return {
    ...queryResults,
    data: queryResults.data ? userDetailsAdapter(queryResults.data) : undefined,
  };
}

export function useGetRepositories(orderBy: RepositoryOrderBy) {
  const login = useReactiveVar(userVar);
  const cursor = useReactiveVar(cursorVar);
  const queryResults = useQuery<IUserResponse>(GET_REPOSITORIES, {
    variables: { login, orderBy, cursor },
  });

  return {
    ...queryResults,
    data: queryResults.data ? repositoryAdapter(queryResults.data) : [],
  };
}
