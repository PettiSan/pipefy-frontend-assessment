import { gql, QueryHookOptions, useQuery } from "@apollo/client";
import { pipeCardFragment } from "@components/cards/pipeCard/PipeCard";
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
