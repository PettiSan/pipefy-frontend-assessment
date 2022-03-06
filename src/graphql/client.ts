import { ApolloClient, InMemoryCache } from "@apollo/client";

const fieldMergeList = {
  keyArgs: (args: any) => {
    return Object.keys(args as any);
  },
  merge(a: any, b: any) {
    return { ...b, data: a ? [...a.data, ...b.data] : b.data };
  },
};

export const graphqlClient = new ApolloClient({
  uri: process.env.REACT_APP_PIPEFY_API_URL || "",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          cards: {
            ...fieldMergeList,
          },
        },
      },
    },
  }),
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_PIPEFY_API_TOKEN || ""}`,
  },
  credentials: "same-origin",
});
