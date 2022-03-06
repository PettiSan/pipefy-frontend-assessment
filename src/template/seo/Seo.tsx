import React from "react";
import { Helmet } from "react-helmet-async";

type SeoProps = {
  title?: string;
  description?: string;
  image?: string;
};

export default function Seo(props: SeoProps) {
  const { title, description, image } = props;

  return (
    <Helmet>
      {!!title && <title>{`${title}`}</title>}
      {!!description && <meta name="description" content={description} />}

      {!!title && <meta name="og:title" content={`${title}`} />}
      {!!description && <meta name="og:description" content={description} />}
      {!!image && <meta name="og:image" content={image} />}
      <meta name="og:type" content="website" />

      {!!title && <meta name="twitter:title" content={`${title}`} />}
      {!!description && (
        <meta name="twitter:description" content={description} />
      )}
      {!!image && <meta name="twitter:image" content={image} />}
      <meta name="twitter:card" content="summary" />
    </Helmet>
  );
}
