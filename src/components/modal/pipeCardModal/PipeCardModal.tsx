import { Button } from "@components/button/Button";
import { InnerCardList } from "@components/cards/innerCard/innerCardList/InnerCardList";
import { QueryLoader } from "@components/queryLoader/QueryLoader";
import { useQueryCards } from "@graphql/queries/globalQueries";
import React from "react";
import { DefaultModalContent } from "../DefaultModalContent";
import styles from "./PipeCardModal.module.css";

type PipeCardModalProps = {
  pipeId: string | null;
};

export function PipeCardModal(props: PipeCardModalProps) {
  const { pipeId } = props;

  const cardsQuery = useQueryCards({
    variables: {
      pipe_id: pipeId,
      first: 2,
    },
    skip: !pipeId,
    fetchPolicy: "cache-and-network",
  });

  return (
    <DefaultModalContent>
      <QueryLoader query={cardsQuery}>
        {({ data, fetchMore }) => (
          <div className={styles.pipeCardModal}>
            {data?.cards?.edges && data?.cards?.edges?.length > 0 && (
              <InnerCardList items={data.cards.edges} />
            )}

            {data?.cards?.pageInfo.hasNextPage && (
              <Button
                onClick={() =>
                  fetchMore({
                    variables: {
                      after: data.cards?.pageInfo.endCursor,
                    },
                  })
                }
              >
                Load More
              </Button>
            )}
          </div>
        )}
      </QueryLoader>
    </DefaultModalContent>
  );
}
