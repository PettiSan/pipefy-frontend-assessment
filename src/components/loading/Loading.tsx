import React from "react";
import styles from "./Loading.module.css";

export function Loading() {
  return (
    <div aria-roledescription="Carregando" className={styles.loading}>
      <div className={styles.spinner} />
    </div>
  );
}
