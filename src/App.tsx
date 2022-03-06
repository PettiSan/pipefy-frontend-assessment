import { PipeCardsList } from "@components/cards/pipeCard/pipeCardsList/PipeCardsList";
import { QueryLoader } from "@components/queryLoader/QueryLoader";
import { useQueryOrganization } from "@graphql/queries/globalQueries";
import { TemplateDefault } from "@template/templateDefault/TemplateDefault";
import React from "react";

function App() {
  const organizationQuery = useQueryOrganization({
    variables: {
      id: process.env.REACT_APP_PIPEFY_ORGANIZATION_ID,
    },
  });

  return (
    <TemplateDefault seoTitle="Pipes Page">
      <QueryLoader query={organizationQuery}>
        {({ data }) => (
          <section>
            {data?.organization?.pipes &&
              data?.organization?.pipes?.length > 0 && (
                <PipeCardsList items={data?.organization?.pipes} />
              )}
          </section>
        )}
      </QueryLoader>
    </TemplateDefault>
  );
}

export default App;
