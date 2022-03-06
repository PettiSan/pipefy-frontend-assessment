import clsx from 'clsx';
import React from 'react';
import styles from './ErrorFeedback.module.css';

export type ErrorFeedbackProps = {
  errorMessage: string[];
};

export function ErrorFeedback(props: ErrorFeedbackProps) {
  const { errorMessage } = props;

  return (
    <div role="alert" className={clsx(styles.errorFeedback)}>
      {errorMessage.map((error, i) => (
        <div key={i}>{error}</div>
      ))}
    </div>
  );
}
