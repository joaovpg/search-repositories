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

export const GET_REPOSITORIES = gql`
  query getRepositories(
    $login: String!
    $orderBy: RepositoryOrder!
    $cursor: String
  ) {
    user(login: $login) {
      repositories(
        first: 100
        after: $cursor
        orderBy: $orderBy
        privacy: PUBLIC
        ownerAffiliations: OWNER
      ) {
        nodes {
          id
          name
          description
          url
          stargazerCount
          updatedAt
          languages(first: 1, orderBy: { field: SIZE, direction: DESC }) {
            nodes {
              id
              name
              color
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;
