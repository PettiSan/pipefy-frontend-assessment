import { QueryResult } from "@apollo/client";
import { ApiFeedback } from "@components/apiFeedback/ApiFeedback";
import { Button } from "@components/button/Button";
import { Loading } from "@components/loading/Loading";
import React, { ReactNode, useCallback, useState } from "react";
import styles from "./QueryLoader.module.css";

type QueryLoaderProps<T, V> = {
  query: QueryResult<T, V>;
  children: (data: QueryResult<T, V>) => ReactNode;
};
export function QueryLoader<T, V>(props: QueryLoaderProps<T, V>) {
  const { query, children } = props;

  const [retryCount, setRetryCount] = useState(0);

  const onRetry = useCallback(() => {
    if (retryCount > 2) {
      window.location.href = "/";
    }

    query.refetch().finally(() => {
      setRetryCount(retryCount + 1);
    });
  }, [query, retryCount, setRetryCount]);

  if (query.loading) {
    return (
      <div className={styles.loadingWrapper}>
        <Loading />
      </div>
    );
  }

  if (
    query.error &&
    query.error.graphQLErrors[0] &&
    query.error.graphQLErrors[0].extensions &&
    query.error.graphQLErrors[0].extensions.code === "UNAUTHENTICATED"
  ) {
    return (
      <div className={styles.queryLoader}>
        <div className={styles.queryLoader_title}>Sessão expirada!</div>

        <ApiFeedback error={query.error} />
      </div>
    );
  }

  if (query.error) {
    return (
      <section className={styles.queryLoader}>
        <div className={styles.queryLoader_title}>Ops!</div>

        <ApiFeedback error={query.error} />

        <Button onClick={onRetry}>Tentar novamente</Button>
      </section>
    );
  }

  return <>{children(query)}</>;
}
