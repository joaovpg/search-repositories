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

interface Repositories {
  __typename: string;
  nodes: Repository[];
}

interface Repository {
  __typename: string;
  stargazerCount: number;
  name: string;
  updatedAt: string;
  description: null | string;
  url: string;
  id: string;
  languages: Languages;
}

interface Languages {
  __typename: string;
  nodes: Node[];
}

interface Node {
  __typename: string;
  color: string;
  name: string;
  id: string;
}

interface Followers {
  __typename: string;
  totalCount: number;
}
