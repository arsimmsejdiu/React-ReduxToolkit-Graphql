import gql from "graphql-tag";

export const GET_ANIME_PAGE = gql`
  query GetAnimePage($page: Int!, $perPage: Int!) {
    Page(page: $page, perPage: $perPage) {
      media {
        id
        description
        averageScore
        episodes
        title {
          english
        }
        coverImage {
          extraLarge
        }
      }
    }
  }
`;
