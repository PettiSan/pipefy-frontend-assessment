import { Header } from "@template/header/Header";
import Seo from "@template/seo/Seo";
import React, { ReactNode } from "react";
import styles from "./TemplateDefault.module.css";

type TemplateDefaultProps = {
  children: ReactNode;
  seoTitle: string;
};

export function TemplateDefault(props: TemplateDefaultProps) {
  const { children, seoTitle } = props;

  return (
    <>
      <Seo title={seoTitle} />

      <main className={styles.templateDefault}>
        <Header />

        {children}
      </main>
    </>
  );
}
