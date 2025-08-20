import { gql } from "@apollo/client";

export const SEARCH_USERS = gql`
  query searchUsers($query: String!) {
    search(query: $query, type: USER, first: 100) {
      edges {
        node {
          ... on User {
            id
            login
            name
            bio
            avatarUrl
            location
            followers {
              totalCount
            }
            repositories {
              totalCount
            }
          }
        }
      }
    }
  }
`;
