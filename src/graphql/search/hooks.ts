import { SEARCH_USERS } from "@/graphql/search/queries";
import { useQuery, useReactiveVar } from "@apollo/client";
import { searchUserQuery } from "./state";
import type { ISearch } from "@/interface/ISearch";

export const useSearchUsers = () => {
  const query = useReactiveVar(searchUserQuery);
  return useQuery<ISearch>(SEARCH_USERS, {
    variables: { query: query },
  });
};
