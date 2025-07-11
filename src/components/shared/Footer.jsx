import {
  footerCompany,
  footerQuickLinks,
  footerServices,
} from "@/data/commonData";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGetInTouchClick = () => {
    if (!email.trim()) return toast.error("Email is required.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return toast.error("Please enter a valid email.");

    const SERVICE_ID = "service_m1tsr4h";
    const TEMPLATE_ID = "template_n7iidwo";
    const PUBLIC_KEY = "W7aMVGuT0tr6SpaBw";

    setIsLoading(true);
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          user_email: email,
          to_name: "Tod",
          from_site: "TOD Website",
          time: new Date().toLocaleString(),
        },
        PUBLIC_KEY
      )
      .then((result) => {
        const { status, text } = result || {};
        if (status) {
          toast.success("Message sent successfully!");
          setEmail("");
        } else {
          toast.error(text);
        }
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        toast.error("Failed to send message. Please try again."); // Error toast
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <footer>
      <ToastContainer position="top-right" autoClose={3000} />
      <Container>
        <Row>
          {/* <Col lg={4}>
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
          </Col> */}
          <Col lg={12}>
            <div className="right_content">
              <Row>
                <Col lg={6}>
                  <div className="inner_section">
                    <div className="single_item service_item">
                      <h2>{t("Services")}</h2>
                      <ul>
                        {footerServices?.map(({ name, href, hash }, index) => (
                          <li key={index}>
                            <Link href={`${href}${hash}`}>{t(name)}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="top_link">
                    <div className="single_item company_links">
                      <h2>{t("Company")}</h2>
                      <ul>
                        {footerCompany?.map(({ name, href }, index) => (
                          <li key={index}>
                            <Link href={href}>{t(name)}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="single_item quick_links">
                      <h2>{t("Quick Links")}</h2>
                      <ul>
                        {footerQuickLinks?.map(({ name, href }, index) => (
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
                      <button
                        type="button"
                        disabled={isLoading}
                        onClick={handleGetInTouchClick}
                      >
                        {t("Get in Touch")}
                      </button>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={12}>
            <div className="g_between connect_on_div common_border">
              <div className="connect_on_inner">
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
                <div className="social_links">
                  <h2>{t("Follow Us")}</h2>
                  <div className="icons">
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
              </div>
              <Image
                src="/images/icons/vision2030.png"
                width={100}
                height={67}
                alt="vision"
                className="vision_img"
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
