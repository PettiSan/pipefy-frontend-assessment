import { gql, QueryHookOptions, useQuery } from "@apollo/client";
import { innerCardFragment } from "@components/cards/innerCard/InnerCard";
import { pipeCardFragment } from "@components/cards/pipeCard/PipeCard";
import { QCards } from "@graphql-types/QCards";
import { QOrganization } from "@graphql-types/QOrganization";

export const Q_ORGANIZATION = gql`
  query QOrganization($id: ID!) {
    organization(id: $id) {
      id
      name
      pipes {
        ...PipeCardFragment
      }
    }
  }
  ${pipeCardFragment}
`;

export function useQueryOrganization(
  options?: QueryHookOptions<QOrganization>
) {
  return useQuery<QOrganization>(Q_ORGANIZATION, options);
}

export const Q_CARDS = gql`
  query QCards($pipe_id: ID!, $first: Int) {
    cards(pipe_id: $pipe_id, first: $first) {
      ...InnerCardFragment
    }
  }
  ${innerCardFragment}
`;

export function useQueryCards(options?: QueryHookOptions<QCards>) {
  return useQuery<QCards>(Q_CARDS, options);
}
