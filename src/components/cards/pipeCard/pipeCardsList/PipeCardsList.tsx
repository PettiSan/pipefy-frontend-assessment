import { PipeCard } from "@components/cards/pipeCard/PipeCard";
import { PipeCardModal } from "@components/modal/pipeCardModal/PipeCardModal";
import { QOrganization_organization_pipes } from "@graphql-types/QOrganization";
import { useModal } from "@modal/useModal";
import React, { useState } from "react";
import styles from "./PipeCardsList.module.css";

type PipeCardsListProps = {
  items: (QOrganization_organization_pipes | null)[] | null | undefined;
};

export function PipeCardsList(props: PipeCardsListProps) {
  const { items } = props;

  const [selectedPipeId, setSelectedPipeId] = useState<string | null>(null);

  const pipeCardModal = useModal({
    modal: <PipeCardModal pipeId={selectedPipeId} />,
  });

  return (
    <ul className={styles.pipeCardsList}>
      {pipeCardModal.elem}

      {items &&
        items.map((item) => {
          return (
            item && (
              <li key={item.id}>
                <button
                  onClick={() => {
                    setSelectedPipeId(item.id);
                    pipeCardModal.open();
                  }}
                >
                  <PipeCard {...item} />
                </button>
              </li>
            )
          );
        })}
    </ul>
  );
}
