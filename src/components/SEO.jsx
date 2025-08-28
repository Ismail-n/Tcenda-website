import Head from "next/head";
import React from "react";
import { useTranslation } from "react-i18next";

const SEO = ({
  title = "",
  description = "",
  keywords = "",
  url = "https://smxccmj1-3000.inc1.devtunnels.ms/",
  image = "",
}) => {
  const { t } = useTranslation();

  return (
    <Head>
      {/* Standard SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Head>
  );
};

export default SEO;
