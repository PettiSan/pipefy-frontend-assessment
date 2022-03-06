import { QCards_cards_edges } from "@graphql-types/QCards";
import React from "react";
import { InnerCard } from "../InnerCard";
import styles from "./InnerCardList.module.css";

type InnerCardListProps = {
  items: (QCards_cards_edges | null)[] | null;
};

export function InnerCardList(props: InnerCardListProps) {
  const { items } = props;

  return (
    <ul className={styles.innerCardList}>
      {items &&
        items.map((item) => {
          return (
            item && (
              <li key={item.node?.id}>
                <InnerCard {...item.node!} />
              </li>
            )
          );
        })}
    </ul>
  );
}
