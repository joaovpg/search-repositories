export interface ISearch {
  search: Search;
}

interface Search {
  __typename: string;
  edges: Edge[];
}

interface Edge {
  __typename: string;
  node: Node;
}

interface Node {
  __typename: string;
  login: string;
  name: null | string;
  id: string;
  bio: null | string;
  avatarUrl: string;
  location: null | string;
  followers: TotalCount;
  repositories: TotalCount;
}

interface TotalCount {
  __typename: string;
  totalCount: number;
}
