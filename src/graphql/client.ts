import { ApolloClient, InMemoryCache } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";

export const graphqlClient = new ApolloClient({
  uri: process.env.REACT_APP_PIPEFY_API_URL || "",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          cards: relayStylePagination(["pipe_id"]),
        },
      },
    },
  }),
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_PIPEFY_API_TOKEN || ""}`,
  },
  credentials: "same-origin",
});
