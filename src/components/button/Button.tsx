import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";
import styles from "./Button.module.css";

type ButtonProps = PropsWithChildren<{}> &
  ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
  const { children, ...rest } = props;

  return (
    <button {...rest} className={styles.button}>
      {children}
    </button>
  );
}
