import { SEARCH_USERS } from "@/graphql/search/queries";
import { useQuery, useReactiveVar } from "@apollo/client";
import { queryVar } from "./state";
import { searchUsersAdapter } from "./adapters";
import type { ISearchResponse } from "./types";

export const useSearchUsers = () => {
  const query = useReactiveVar(queryVar);

  const queryResults = useQuery<ISearchResponse>(SEARCH_USERS, {
    variables: { query: query },
  });

  return {
    ...queryResults,
    data: queryResults.data ? searchUsersAdapter(queryResults.data) : [],
  };
};
