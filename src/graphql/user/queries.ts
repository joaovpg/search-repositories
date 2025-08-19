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
      repositories(
        orderBy: { field: STARGAZERS, direction: DESC }
        first: 100
        privacy: PUBLIC
        ownerAffiliations: OWNER
      ) {
        nodes {
          stargazerCount
          name
          description
          url
          updatedAt
          id
          languages(first: 1, orderBy: { field: SIZE, direction: DESC }) {
            nodes {
              color
              name
              id
            }
          }
        }
      }
    }
  }
`;
