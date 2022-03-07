import { ApolloProvider } from "@apollo/client";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { PipeCardsList } from "@components/cards/pipeCard/pipeCardsList/PipeCardsList";
import { graphqlClient } from "@graphql/client";
import { Q_ORGANIZATION } from "@graphql/queries/globalQueries";
import { waitFor } from "@testing-library/react";
import React from "react";
import { HelmetProvider } from "react-helmet-async";
import renderer from "react-test-renderer";
import App from "./App";

it("renders App", () => {
  renderer.create(
    <ApolloProvider client={graphqlClient}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ApolloProvider>
  );
});

const mocks: MockedResponse[] = [
  {
    request: {
      query: Q_ORGANIZATION,
      variables: {
        id: process.env.REACT_APP_PIPEFY_ORGANIZATION_ID,
      },
    },
    result: {
      data: {
        organization: {
          id: "123456789",
          name: "Pipefy FrontEnd - Assessment",
          pipes: [
            {
              id: "1",
              name: "IT Service Desk",
              color: "blue",
              cards_count: 10,
            },
          ],
        },
      },
    },
  },
];

it("renders PipeCardsList without error", () => {
  renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <PipeCardsList items={[]} />
    </MockedProvider>
  );
});

test("renders PipeCardsList with data without error", async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <PipeCardsList
        items={(mocks[0]!.result as any).data.organization.pipes}
      />
    </MockedProvider>
  );

  const article = await waitFor(() => component.root.findByType("article"));

  expect(article).toBeTruthy();
});
