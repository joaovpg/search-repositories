import { useQuery, useReactiveVar } from "@apollo/client";
import { GET_REPOSITORIES, GET_USER } from "@/graphql/profile/queries";
import { cursorVar, userVar } from "./state";
import type { IUserResponse } from "@/interface/IUser";
import type { RepositoryOrderBy } from "./types";

export function useGetUser() {
  const login = useReactiveVar(userVar);
  return useQuery<IUserResponse>(GET_USER, {
    variables: { login },
  });
}

export function useGetRepositories(orderBy: RepositoryOrderBy) {
  const login = useReactiveVar(userVar);
  const cursor = useReactiveVar(cursorVar);
  return useQuery<IUserResponse>(GET_REPOSITORIES, {
    variables: { login, orderBy, cursor },
  });
}
