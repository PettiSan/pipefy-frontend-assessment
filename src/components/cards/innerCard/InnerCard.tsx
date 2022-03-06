import { gql } from "@apollo/client";
import { InnerCardFragment_edges_node } from "@graphql-types/InnerCardFragment";
import { formatDate } from "@utils/dateUtils";
import React from "react";
import styles from "./InnerCard.module.css";

export const innerCardFragment = gql`
  fragment InnerCardFragment on CardConnection {
    edges {
      node {
        id
        title
        createdAt
        url
      }
    }
  }
`;

export function InnerCard(props: InnerCardFragment_edges_node) {
  const { title, createdAt, url } = props;

  return (
    <aside className={styles.innerCard}>
      <span className={styles.title}>{title}</span>

      <span className={styles.createdAt}>
        Created at: {formatDate(createdAt)}
      </span>

      {url && (
        <a href={url} target="_blank" rel="noreferrer">
          Ver detalhes
        </a>
      )}
    </aside>
  );
}
