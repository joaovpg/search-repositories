import { formatDate } from "@/utils";
import type { IRepository } from "@/interface/IRepository";
import type { IUserDetails, IUserResponse } from "@/interface/IUser";

export const repositoryAdapter = (response: IUserResponse): IRepository[] => {
  return response.user.repositories.nodes.map(
    ({ id, description, languages, name, stargazerCount, updatedAt, url }) => ({
      id,
      name,
      description: description ?? undefined,
      url,
      updatedAt: formatDate(new Date(updatedAt)),
      stargazerCount,
      languages: languages.nodes[0],
    })
  );
};

export const userDetailsAdapter = (response: IUserResponse): IUserDetails => {
  const user = response.user;
  return {
    login: user.login,
    name: user.name,
    avatarUrl: user.avatarUrl,
    bio: user.bio,
    followersCount: user.followers.totalCount,
    followingCount: user.following.totalCount,
  };
};
