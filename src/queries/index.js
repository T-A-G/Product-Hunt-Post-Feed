import { gql } from '@apollo/client';

export const GET_POSTS = gql`
query MorePosts($cursor: String) {
  posts(after: $cursor, order: NEWEST) {
    pageInfo{
      endCursor
    }
    edges {
      cursor,
      node {
        id,
        tagline,
        url,
        thumbnail{
          url
        }
        user{
          username,
        },
        votesCount,
        commentsCount,
        name,
        createdAt
      }
    }
  }
}
`;
