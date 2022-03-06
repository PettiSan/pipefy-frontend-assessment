/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: InnerCardFragment
// ====================================================

export interface InnerCardFragment_edges_node {
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

export interface InnerCardFragment_edges {
  /**
   * The item at the end of the edge.
   */
  node: InnerCardFragment_edges_node | null;
}

export interface InnerCardFragment {
  /**
   * A list of edges.
   */
  edges: (InnerCardFragment_edges | null)[] | null;
}
