import { gql, QueryHookOptions, useQuery } from "@apollo/client";
import { innerCardFragment } from "@components/cards/innerCard/InnerCard";
import { QCards } from "@graphql-types/QCards";

export const Q_CARDS = gql`
  query QCards($pipe_id: ID!, $first: Int, $after: String) {
    cards(pipe_id: $pipe_id, first: $first, after: $after) {
      ...InnerCardFragment
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
  ${innerCardFragment}
`;

export function useQueryCards(options?: QueryHookOptions<QCards>) {
  return useQuery<QCards>(Q_CARDS, options);
}
