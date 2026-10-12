import Link from "next/link";

const AboutHero = () => {
  return (
    <section
      className="new_about_hero"
      style={{ backgroundImage: "url(/images/newAboutUs/hero_image.webp)" }}
    >
      <div className="new_about_hero_overlay" />
      <div className="new_about_hero_content">
        <h1 className="new_about_hero_title">About Us</h1>
        <p className="new_about_breadcrumb">
          <Link href="/new-home">Home</Link> &nbsp;&gt;&nbsp; About Us
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
