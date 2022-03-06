/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QOrganization
// ====================================================

export interface QOrganization_organization_pipes {
  /**
   * The pipe ID
   */
  id: string;
  /**
   * The Repo name
   */
  name: string;
  /**
   * Color of pipe/database
   */
  color: string | null;
  /**
   * The pipe total cards
   */
  cards_count: number | null;
}

export interface QOrganization_organization {
  /**
   * The organization ID
   */
  id: string;
  /**
   * The organization name
   */
  name: string | null;
  /**
   * Fetches a group of pipes based on arguments
   */
  pipes: (QOrganization_organization_pipes | null)[] | null;
}

export interface QOrganization {
  /**
   * Lookup an organization by its ID
   */
  organization: QOrganization_organization | null;
}

export interface QOrganizationVariables {
  id: string;
}
