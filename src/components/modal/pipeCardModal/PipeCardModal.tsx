import { InnerCardList } from "@components/cards/innerCard/innerCardList/InnerCardList";
import { QueryLoader } from "@components/queryLoader/QueryLoader";
import { useQueryCards } from "@graphql/queries/globalQueries";
import React, { useCallback } from "react";
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
      first: 1,
    },
    skip: !pipeId,
  });

  const loadMore = useCallback(() => {
    console.log(
      "🚀 ~ file: PipeCardModal.tsx ~ line 30 ~ loadMore ~ cardsQuery",
      cardsQuery.variables
    );

    cardsQuery.fetchMore({
      variables: {
        ...cardsQuery.variables,
        first: (cardsQuery.variables as any).first + 1,
      },
    });
  }, [cardsQuery]);

  return (
    <DefaultModalContent>
      <QueryLoader query={cardsQuery}>
        {({ data }) => (
          <div className={styles.pipeCardModal}>
            {data?.cards?.edges && data?.cards?.edges?.length > 0 && (
              <InnerCardList items={data.cards.edges} />
            )}

            <button onClick={loadMore}>Load More</button>
          </div>
        )}
      </QueryLoader>
    </DefaultModalContent>
  );
}
