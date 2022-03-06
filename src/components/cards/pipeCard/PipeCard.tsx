import { gql } from "@apollo/client";
import { PipeCardFragment } from "@graphql-types/PipeCardFragment";
import { LockIcon } from "@icons/LockIcon";
import { StarIcon } from "@icons/StarIcon";
import { getBgColor } from "@utils/getBgColor";
import clsx from "clsx";
import React from "react";
import Tilt from "react-parallax-tilt";
import styles from "./PipeCard.module.css";

export const pipeCardFragment = gql`
  fragment PipeCardFragment on Pipe {
    id
    name
    color
    cards_count
  }
`;

export function PipeCard(props: PipeCardFragment) {
  const { name, color, cards_count } = props;

  return (
    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={15}>
      <article className={clsx(styles.pipeCard, getBgColor(color))}>
        <div className={styles.header}>
          <div className={styles.lockIcon}>
            <LockIcon />
          </div>

          <div className={styles.starIcon}>
            <StarIcon />
          </div>
        </div>

        <h3>{name}</h3>

        <span>{cards_count} cards</span>
      </article>
    </Tilt>
  );
}
