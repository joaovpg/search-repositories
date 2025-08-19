import { useQuery, useReactiveVar } from "@apollo/client";
import { GET_USER } from "@/graphql/user/queries";
import { userVar } from "./state";
import type { IUserResponse } from "@/interface/IUser";

export function useGetUser() {
  const login = useReactiveVar(userVar);
  return useQuery<IUserResponse>(GET_USER, {
    variables: { login },
  });
}
