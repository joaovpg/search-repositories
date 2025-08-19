import { SEARCH_USERS } from "@/graphql/search/queries";
import { useQuery, useReactiveVar } from "@apollo/client";
import { queryVar } from "./state";
import type { ISearch } from "@/interface/ISearch";

export const useSearchUsers = () => {
  const query = useReactiveVar(queryVar);
  return useQuery<ISearch>(SEARCH_USERS, {
    variables: { query: query },
  });
};
