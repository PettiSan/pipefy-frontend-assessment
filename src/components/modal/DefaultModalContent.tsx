import { CloseIcon } from "@icons/CloseIcon";
import { useModalContent } from "@modal/useModal";
import React, { ReactNode } from "react";
import styles from "./DefaultModalContent.module.css";

type DefaultModalContentProps = {
  children: ReactNode;
};

export function DefaultModalContent(props: DefaultModalContentProps) {
  const context = useModalContent();

  const { children } = props;

  return (
    <div className={styles.defaultModalContent}>
      {context.closeEnabled && (
        <button
          onClick={context.close}
          aria-label="Fechar modal"
          className={styles.button}
        >
          <CloseIcon />
        </button>
      )}
      {children}
    </div>
  );
}
