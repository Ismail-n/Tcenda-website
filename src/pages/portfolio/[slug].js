// pages/portfolio/[slug].js
import PortfolioDetails from "@/components/portfolio/Details/PortfolioDetails";
import SEO from "@/components/SEO";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ProjectDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    console.log("slug:", slug);
  }, [slug]);

  if (!slug) return <div>Loading...</div>;

  return (
    <>
      <SEO
        title="Portfolio Details"
        description="Explore our portfolio at TOD — a showcase of innovative web projects, creative UI/UX designs, and cutting-edge digital solutions crafted with precision and passion."
      />
      <main className="portfolio_details">
        <PortfolioDetails slug={slug} />
      </main>
    </>
  );
};

export default ProjectDetail;
