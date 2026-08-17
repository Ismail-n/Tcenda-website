// pages/portfolio/[slug].js
import PortfolioDetails from "@/components/portfolio/Details/PortfolioDetails";
import SEO from "@/components/SEO";
import { metaData } from "@/data/metaInformationData";
import { portfolioDetails } from "@/data/portfolioDetailsData";
import { useRouter } from "next/router";
import { useEffect } from "react";

export async function getStaticPaths() {
  const paths = portfolioDetails.map((item) => ({
    params: { slug: item.id },
  }));

  return {
    paths,
    fallback: false, // static export requires false
  };
}

export async function getStaticProps({ params }) {
  const item = portfolioDetails.find((d) => d.id === params.slug);

  // Pull SEO/meta info from your metaData file
  const meta = metaData.find(m => m.path === `/portfolio/${params.slug}/`)?.details || {
    title: item?.metaTitle || item?.name || "Portfolio Project",
    description: item?.metaDescription || item?.shortDesc || "",
    keywords: item?.metaKeywords || "",
  };

  return {
    props: { item, meta },
  };
}

const ProjectDetail = ({ item, meta }) => {
  const router = useRouter();
  const { slug } = router.query;

  // useEffect(() => {
  //   console.log("slug:", slug);
  // }, [slug]);

  return (
    <>
      {/* ✅ SEO for this portfolio page */}
      <SEO {...meta} />

      <main className="portfolio_details">
        <PortfolioDetails slug={item.id} />
      </main>
    </>
  );
};

export default ProjectDetail;
