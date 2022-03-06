import { ApolloError } from '@apollo/client';
import { ErrorFeedback } from '@components/errorFeedback/ErrorFeedback';
import React from 'react';

export function getApiErrorMessage(error: ApolloError | null | undefined): string[] {
  if (!error) {
    return [];
  }

  if (error?.graphQLErrors.length === 0 && Array.isArray(error.networkError)) {
    return [
      (error?.networkError as any)?.result?.errors.map((v: { message: string }) => v.message).join(' - ') ||
        error?.message ||
        'Falha ao conectar com o servidor.',
    ];
  }

  if (error.message) {
    return [error.message];
  }

  return ['Falha ao conectar com o servidor.'];
}

export type ApiFeedbackProps = {
  error: ApolloError | undefined;
};

export function ApiFeedback(props: ApiFeedbackProps) {
  const { error } = props;

  if (!error) {
    return <></>;
  }

  return <ErrorFeedback errorMessage={getApiErrorMessage(error || null)} />;
}
