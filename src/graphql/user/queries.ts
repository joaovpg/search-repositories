import { gql } from "@apollo/client";

export const GET_USER = gql`
  query getUser($login: String!) {
    user(login: $login) {
      avatarUrl
      name
      login
      bio
      followers {
        totalCount
      }
      following {
        totalCount
      }
      email
    }
  }
`;
