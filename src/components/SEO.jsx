import Head from "next/head";
import React from "react";

const SEO = ({ title = "", description = "", keywords = "" }) => {
  return (
    <Head>
      <title>{title} | TOD</title>
      <meta name="description" content={description || ""} />
      <meta name="keywords" content={keywords || ""} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default SEO;
