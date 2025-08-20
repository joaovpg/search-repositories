export interface ISearchUser {
  login: string;
  name?: string;
  id: string;
  bio?: string;
  avatarUrl: string;
  location?: string;
  followersCount: number;
  repositoriesCount: number;
}
