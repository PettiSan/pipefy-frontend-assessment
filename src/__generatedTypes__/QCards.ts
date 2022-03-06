/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QCards
// ====================================================

export interface QCards_cards_edges_node {
  /**
   * The card ID
   */
  id: string;
  /**
   * The card title
   */
  title: string;
  /**
   * When the card was created
   */
  createdAt: any | null;
  /**
   * The card URL
   */
  url: string | null;
}

export interface QCards_cards_edges {
  /**
   * The item at the end of the edge.
   */
  node: QCards_cards_edges_node | null;
}

export interface QCards_cards {
  /**
   * A list of edges.
   */
  edges: (QCards_cards_edges | null)[] | null;
}

export interface QCards {
  /**
   * Fetches a group of cards based on arguments
   */
  cards: QCards_cards | null;
}

export interface QCardsVariables {
  pipe_id: string;
}
