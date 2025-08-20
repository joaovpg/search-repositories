import { SEARCH_USERS } from "@/graphql/search/queries";
import { useQuery, useReactiveVar } from "@apollo/client";
import { queryVar } from "./state";
import type { ISearch } from "@/interface/ISearch";
import { searchUsersAdapter } from "./adapters";

export const useSearchUsers = () => {
  const query = useReactiveVar(queryVar);

  const queryResults = useQuery<ISearch>(SEARCH_USERS, {
    variables: { query: query },
  });

  return {
    ...queryResults,
    data: queryResults.data ? searchUsersAdapter(queryResults.data) : [],
  };
};
