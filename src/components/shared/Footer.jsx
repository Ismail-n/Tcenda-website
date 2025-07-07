import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const services = [
  { name: "Mobile App Development", href: "#" },
  { name: "Full Stack Development", href: "#" },
  { name: "AI/ML", href: "#" },
  { name: "Cloud & DevOps", href: "#" },
  { name: "ERP Solutions", href: "#" },
  { name: "Odoo Customization", href: "#" },
  { name: "UI/UX Design", href: "#" },
  { name: "Cybersecurity", href: "#" },
];

const company = [
  { name: "About Us", href: "#" },
  { name: "Portfolio", href: "#" },
  { name: "Services", href: "#" },
  { name: "Resources", href: "#" },
];

const quickLinks = [
  { name: "Career", href: "#" },
  { name: "Contact Us", href: "#" },
  { name: "Become a Partner", href: "#" },
  { name: "Blogs", href: "#" },
];

const Footer = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  const handleGetInTouchClick = () => {
    if (!email.trim()) return alert("Email is required.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return alert("Please enter a valid email.");
    console.log("Get in Touch Email:", email);
  };

  return (
    <footer>
      <Container>
        <Row>
          <Col lg={4}>
            <div className="left_content">
              <div className="logo">
                <Link href="/">
                  <Image
                    src="/images/icons/logo.svg"
                    width={126}
                    height={24}
                    alt="logo"
                    priority
                  />
                </Link>
              </div>
              <p>
                {t(
                  "Welcome to Tod Al-Ufuq — where visionary thinking meets technological excellence."
                )}
              </p>
              <h2>
                {t(
                  "We are a purpose-driven technology company fueled by innovation and committed to shaping the digital future of the Kingdom."
                )}
                <br />
                <br />
                {t(
                  "Our solutions are grounded in local insights, developed by experts who understand the region's evolving digital landscape."
                )}
                <br />
                <br />
                {t(
                  "At Tod Al-Ufuq, we design and build secure, scalable, and smart technology tailored to the needs of modern enterprises — helping them grow stronger, move faster, and reach beyond expectations in today's connected world."
                )}
              </h2>
            </div>
          </Col>
          <Col lg={8}>
            <div className="right_content">
              <div className="inner_section">
                <div className="single_item service_item">
                  <h2>{t("Services")}</h2>
                  <ul>
                    {services?.map(({ name, href }, index) => (
                      <li key={index}>
                        <Link href={href}>{t(name)}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="w-100">
                <div className="top_link">
                  <div className="single_item">
                    <h2>{t("Company")}</h2>
                    <ul>
                      {company?.map(({ name, href }, index) => (
                        <li key={index}>
                          <Link href={href}>{t(name)}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="single_item">
                    <h2>{t("Quick Links")}</h2>
                    <ul>
                      {quickLinks?.map(({ name, href }, index) => (
                        <li key={index}>
                          <Link href={href}>{t(name)}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="conversion_inner">
                  <h2>{t("Start a Conversation with Us")}</h2>
                  <div className="get_in_touch_input">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t("Email Address")}
                    />
                    <button type="button" onClick={handleGetInTouchClick}>
                      {t("Get in Touch")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={12}>
            <div className="g_between connect_on_div common_border">
              <div className="connect_on_inner">
                <h2>{t("Connect On -")}</h2>
                <div className="social_links">
                  <Link
                    href="https://linkedin.com"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/icons/linkedIn.svg"
                      width={36}
                      height={36}
                      alt="LinkedIn"
                    />
                  </Link>
                  <Link
                    href="https://facebook.com"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/icons/facebook.svg"
                      width={36}
                      height={36}
                      alt="facebook"
                    />
                  </Link>
                </div>
              </div>
              <Image
                src="/images/icons/vision2030.png"
                width={100}
                height={67}
                alt="vision"
              />
            </div>
          </Col>
          <Col lg={12}>
            <div className="reserved_row">
              <h2>© 2025 Tod All Rights Reserved.</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
