import type { ISearch } from "@/interface/ISearch";

export function searchUsersAdapter(response: ISearch) {
  return response.search.edges
    .map(({ node }) => {
      try {
        console.log(node);
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
    .filter(Boolean);
}
