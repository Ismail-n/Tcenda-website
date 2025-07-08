import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const portfolios = [
  {
    id: "half-million",
    logoDetails: {
      logo: "halfMillionLogo",
      logoWidth: 80,
      logoHeight: 80,
    },
    title: "Half Million",
    description:
      "Experience the Richness of Artisan Coffee — Anytime, Anywhere. Your Favorite Brews, Delivered Fresh from the Café to Your Pocket.",
    appStoreLink: "#",
    playStoreLink: "#",
    caseStudyLink: "#",
    imageDetails: {
      image: "halfMillion",
      imageWidth: 412,
      imageHeight: 476,
    },
    background: "linear-gradient(to left, #87C5B2, #D3B48C)",
  },
  {
    id: "ashjar-friends",
    logoDetails: {
      logo: "ashjarFriendsLogo",
      logoWidth: 80,
      logoHeight: 80,
    },
    title: "Ashjar Friends App",
    description:
      "Enjoy Seamless Loyalty Rewards, Personalized Offers, and Instant Access to Ashjar Perks. Your Cafe Experience, Elevated Right in Your Pocket.",
    appStoreLink: "https://apps.apple.com/gb/app/ashjar-friends/id6670760287",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.ashjarcafe.sa",
    caseStudyLink: "#",
    imageDetails: {
      image: "ashjarFriends",
      imageWidth: 415,
      imageHeight: 517,
    },
    background: "linear-gradient(to left, #BD7F4E, #FFCDA5)",
  },
  {
    id: "ashjar-space",
    logoDetails: {
      logo: "ashjarSpaceLogo",
      logoWidth: 80,
      logoHeight: 80,
    },
    title: "Ashjar Space",
    description:
      "Discover and Book Premium Spaces Across Saudi Arabia with Ease and Flexibility. Plan Gatherings, Events, or Work Sessions — All in One App.",
    appStoreLink: "https://apps.apple.com/sa/app/ashjar-space/id6476087387",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.ashjarbooking&hl=en",
    caseStudyLink: "#",
    imageDetails: {
      image: "ashjarSpace",
      imageWidth: 343,
      imageHeight: 495,
    },
    background: "linear-gradient(to right, #FAFFD9, #C5D271)",
  },
  {
    id: "ease",
    logoDetails: {
      logo: "easeLogo",
      logoWidth: 115,
      logoHeight: 55,
    },
    title: "Ease",
    description:
      "Manage Operations, Sales, and Finance — All from One Central Dashboard. Intelligent Business Management, Right at Your Fingertips.",
    caseStudyLink: "#",
    imageDetails: {
      image: "ease",
      imageWidth: 482,
      imageHeight: 309,
    },
    background: "linear-gradient(to right, #FFFFFF, #ABDBFF)",
  },
  {
    id: "send",
    logoDetails: {
      logo: "sendLogo",
      logoWidth: 80,
      logoHeight: 80,
    },
    title: "Send",
    description:
      "A Premium Fashion Marketplace That Connects You to Top Retailers in the Kingdom. From Discovery to Delivery, All in One Intuitive App.",
    appStoreLink: "https://apps.apple.com/gb/app/ashjar/id6474177129?uo=2",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.ashjar.sa",
    caseStudyLink: "#",
    imageDetails: {
      image: "send",
      imageWidth: 393,
      imageHeight: 526,
    },
    background: "linear-gradient(to right, #FFEBC2, #FBB21C)",
  },
  {
    id: "cup-crew",
    logoDetails: {
      logo: "cupCrewLogo",
      logoWidth: 80,
      logoHeight: 80,
    },
    title: "Cup Crew",
    description:
      "Browse, Order, and Collect from Your Favorite Local Cafés — Enjoy Smooth Payments and Loyalty Benefits, All in One App.",
    appStoreLink: "#",
    playStoreLink: "#",
    caseStudyLink: "#",
    imageDetails: {
      image: "cupCrew",
      imageWidth: 489,
      imageHeight: 489,
    },
    background: "linear-gradient(to left, #14463A, #D4B38B)",
  },
  {
    id: "real-estate",
    logoDetails: {
      logo: "realEstateLogo",
      logoWidth: 80,
      logoHeight: 80,
    },
    title: "Real Estate",
    description:
      "Tailored Search, Virtual Tours, and Agent Support for Buyers and Renters. Built to Serve Saudi's Growing Real Estate Market.",
    appStoreLink: "#",
    playStoreLink: "#",
    caseStudyLink: "#",
    imageDetails: {
      image: "realEstate",
      imageWidth: 411,
      imageHeight: 515,
    },
    background: "linear-gradient(to left, #0C3553, #A2D8FF)",
  },
  {
    id: "burger-buzz",
    logoDetails: {
      logo: "burgerBuzzLogo",
      logoWidth: 80,
      logoHeight: 80,
    },
    title: "Burger Buzz",
    description:
      "A Food Ordering App Designed to Satisfy Your Cravings in Record Time. Track Orders, Earn Rewards, and Enjoy Local Favorites Instantly.",
    appStoreLink: "#",
    playStoreLink: "#",
    caseStudyLink: "#",
    imageDetails: {
      image: "burgerBuzz",
      imageWidth: 450,
      imageHeight: 496,
    },
    background: "linear-gradient(to left, #FFD769 , #FFF1CB)",
  },
  {
    id: "screen-me",
    logoDetails: {
      logo: "screenMeLogo",
      logoWidth: 170,
      logoHeight: 55,
    },
    title: "Screen Me",
    description:
      "Fast, Secure, and Personalized Screenings Tailored to Your Lifestyle. Track, Analyze, and Stay Ahead with Health Insights at Your Fingertips.",
    appStoreLink: "#",
    playStoreLink: "#",
    caseStudyLink: "#",
    imageDetails: {
      image: "screenMe",
      imageWidth: 559,
      imageHeight: 321,
    },
    background: "linear-gradient(to left, #FE6789, #FFA27B)",
  },
  {
    id: "service-now",
    logoDetails: {
      logo: "serviceNowLogo",
      logoWidth: 80,
      logoHeight: 80,
    },
    title: "Service Now",
    description:
      "Designed to Optimize Field Operations with Real-Time Tracking and Task Management. Empowering Service Teams Across the Kingdom.",
    appStoreLink: "#",
    playStoreLink: "#",
    caseStudyLink: "#",
    imageDetails: {
      image: "serviceNow",
      imageWidth: 365,
      imageHeight: 498,
    },
    background: "linear-gradient(to left, #1576EC, #FFFFFF)",
  },
  {
    id: "health-care",
    logoDetails: {
      logo: "healthCareLogo",
      logoWidth: 80,
      logoHeight: 80,
    },
    title: "Healthcare App",
    description:
      "Browse Specialists, Book Instantly, and Get Reminders All from Your Phone. A Seamless Healthcare & Services Booking Platform.",
    appStoreLink: "#",
    playStoreLink: "#",
    caseStudyLink: "#",
    imageDetails: {
      image: "healthCare",
      imageWidth: 383,
      imageHeight: 495,
    },
    background: "linear-gradient(to left, #0BA69A, #FFFFFF)",
  },
];

const PortfoliosSection = () => {
  const { t } = useTranslation();
  return (
    <section className="portfolio_inner_section">
      <Container>
        {portfolios?.map(
          (
            {
              id,
              logoDetails,
              title,
              description,
              appStoreLink,
              playStoreLink,
              caseStudyLink,
              imageDetails,
              background,
            },
            index
          ) => (
            <div
              className="portfolio_inner"
              key={id}
              id={id}
              style={{
                background,
              }}
            >
              <div className="left">
                <div className="content">
                  <Image
                    src={`/images/portfolio/${logoDetails.logo}.svg`}
                    alt={`${title} Logo`}
                    className="logo_img"
                    width={logoDetails.logoWidth}
                    height={logoDetails.logoHeight}
                    priority={index === 0}
                  />
                  <h3>{t(title)}</h3>
                  <p>{t(description)}</p>
                  <div className="store_btns">
                    {appStoreLink && (
                      <a
                        href={appStoreLink}
                        aria-label={`Download ${title} on the App Store`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={"/images/icons/appStore.svg"}
                          width={140}
                          height={44}
                          alt="Download on the App Store"
                        />
                      </a>
                    )}
                    {playStoreLink && (
                      <a
                        href={playStoreLink}
                        aria-label={`Download ${title} on the App Store`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={"/images/icons/playStore.svg"}
                          width={140}
                          height={44}
                          alt="Get it on Google Play"
                        />
                      </a>
                    )}
                  </div>
                </div>
                {caseStudyLink && (
                  <Link href={caseStudyLink} className="case_study_btn">
                    <span>{t("View Case Study")}</span>
                    <ArrowRight />
                  </Link>
                )}
              </div>
              <div className="right">
                <Image
                  src={`/images/portfolio/${imageDetails.image}.webp`}
                  width={imageDetails.imageWidth}
                  height={imageDetails.imageHeight}
                  alt={`${title} Preview`}
                  className="preview_img"
                />
              </div>
            </div>
          )
        )}
      </Container>
    </section>
  );
};

export default PortfoliosSection;
