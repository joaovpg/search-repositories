export type fieldRepository =
  | "STARGAZERS"
  | "UPDATED_AT"
  | "NAME"
  | "CREATED_AT";
export type RepositoryOrder = "ASC" | "DESC";

export interface RepositoryOrderBy {
  field: fieldRepository;
  direction: RepositoryOrder;
}

export interface IUserResponse {
  user: User;
}

interface User {
  __typename: string;
  avatarUrl: string;
  name: string;
  login: string;
  bio: string;
  followers: Followers;
  following: Followers;
  email: string;
  repositories: Repositories;
}

interface Followers {
  __typename: string;
  totalCount: number;
}

interface Repositories {
  __typename: string;
  nodes: Repository[];
  pageInfo: PageInfo;
}

interface PageInfo {
  __typename: string;
  hasNextPage: boolean;
  endCursor: string;
}

interface Repository {
  __typename: string;
  id: string;
  name: string;
  description: null | string;
  url: string;
  stargazerCount: number;
  updatedAt: string;
  languages: Languages;
}

interface Languages {
  __typename: string;
  nodes: Language[];
}

interface Language {
  __typename: string;
  id: string;
  name: string;
  color: string;
}
