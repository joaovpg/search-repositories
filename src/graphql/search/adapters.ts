import type { ISearchUser } from "@/interface/ISearch";
import type { ISearchResponse } from "./types";

export function searchUsersAdapter(response: ISearchResponse): ISearchUser[] {
  return response.search.edges
    .map(({ node }) => {
      try {
        return {
          login: node.login,
          name: node.name ?? undefined,
          id: node.id,
          bio: node.bio ?? undefined,
          avatarUrl: node.avatarUrl,
          location: node.location ?? undefined,
          followersCount: node.followers.totalCount,
          repositoriesCount: node.repositories.totalCount,
        };
      } catch {
        return undefined;
      }
    })
    .filter((item) => item !== undefined);
}
