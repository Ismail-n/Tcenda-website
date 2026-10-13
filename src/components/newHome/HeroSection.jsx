import Link from "next/link";
import { Container } from "react-bootstrap";
import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="new_hero">
      <video
        className="new_hero_video"
        src="/images/newHome/hero_section_video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <Container className="new_hero_content">
        <button className="new_eyebrow_badge">
          Technology & Digital Solutions
        </button>

        <h1 className="new_hero_title">
          We Build the Technology That Moves Your Business Forward
        </h1>

        <p className="new_hero_text">
          We build and delivers intelligent technology solutions that help
          forward thinking organisations move faster, operate smarter and create
          lasting value.
        </p>

        <div className="new_hero_actions">
          <Link href="/contact-us" className="new_get_started_btn">
            Let&apos;s Get Started <ArrowUpRight size={16} />
          </Link>
          <Link href="/about-us" className="new_secondary_btn learn_more_btn">
            Learn More
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
