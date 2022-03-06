import { QuestionIcon } from "@icons/QuestionIcon";
import React from "react";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <h1>Your pipes</h1>
        <QuestionIcon />
      </div>

      <p>Here are all your processes.</p>
    </header>
  );
}
