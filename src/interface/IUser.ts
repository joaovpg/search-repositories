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
}

interface Followers {
  __typename: string;
  totalCount: number;
}
