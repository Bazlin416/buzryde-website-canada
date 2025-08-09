import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export const SEO = ({ title, description, path = "", image }: SEOProps) => {
  const url = typeof window !== "undefined" ? window.location.origin : "";
  const canonical = `${url}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};
