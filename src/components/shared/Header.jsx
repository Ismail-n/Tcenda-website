import React, { useEffect, useMemo, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { Container, Modal } from "react-bootstrap";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";

const Header = () => {
  const { t } = useTranslation();
  const pathname = usePathname();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(false);

  const homeLinks = useMemo(
    () => [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about-us" },
      { name: "Portfolio", href: "/portfolio" },
      {
        name: "Our Services",
        href: "/our-services",
        isSubLinks: true,
        subLinks: [
          { name: "Mobile App Development", href: "/our-services" },
          { name: "Web Development", href: "/our-services" },
          { name: "Digital Transformation", href: "/our-services" },
          { name: "Odoo Customisation", href: "/our-services" },
          { name: "Managed Cloud Services", href: "/our-services" },
          { name: "AI/ML", href: "/our-services" },
          { name: "Data Analytics", href: "/our-services" },
          { name: "UI/UX Design", href: "/our-services" },
        ],
      },
      { name: "Contact Us", href: "/contact-us" },
    ],
    []
  );

  const isActive = (href) => pathname === href || pathname === href + "/";

  const handleMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Stop Scrolling when modal is opened
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false); // scrolling down
      } else {
        setShowHeader(true); // scrolling up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`header ${showHeader ? "visible" : "hidden"}`}>
        <Container>
          <div className="g_between">
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
            <nav
              aria-label="Main navigation"
              className="menu_links d-none d-lg-flex"
            >
              <ul>
                {homeLinks?.map(({ href, name }, index) => (
                  <li key={index}>
                    <Link
                      href={href}
                      className={isActive(href) ? "active" : ""}
                    >
                      {t(name)}
                    </Link>
                  </li>
                ))}
              </ul>
              <LanguageSwitcher />
            </nav>
            {/* Mobile Menu Icon */}
            <div className="d-flex align-items-center gap-2 d-lg-none ">
              {!isMobileMenuOpen && <LanguageSwitcher />}
              <div className="mobile_menu_icon " onClick={handleMenuClick}>
                {isMobileMenuOpen ? (
                  <Image
                    src={"/images/icons/close.svg"}
                    width={32}
                    height={32}
                    alt="menu"
                  />
                ) : (
                  <Image
                    src={"/images/icons/menu.svg"}
                    width={40}
                    height={37}
                    alt="menu"
                  />
                )}
              </div>
            </div>
          </div>
        </Container>
        <Modal
          show={isMobileMenuOpen}
          onHide={() => setIsMobileMenuOpen(false)}
          fullscreen
          className="mobile_menu_modal"
        >
          <div className="modal_header">
            <Link href="/">
              <Image
                src="/images/icons/logo.svg"
                width={126}
                height={24}
                alt="logo"
                priority
              />
            </Link>
            <Image
              src={"/images/icons/close.svg"}
              width={32}
              height={32}
              alt="menu"
              className="close_icon"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </div>
          <nav aria-label="Main navigation" className="mobile_menu_links">
            <ul>
              {homeLinks?.map(({ href, name, isSubLinks, subLinks }, index) => (
                <li key={index} className={isSubLinks ? "has-dropdown" : ""}>
                  {isSubLinks ? (
                    <div className="sub_link">
                      <button
                        type="button"
                        onClick={() => setOpenDropdown((prev) => !prev)}
                        className={`${openDropdown ? "active" : ""}`}
                      >
                        {t(name)}{" "}
                        {openDropdown ? <ChevronUp /> : <ChevronDown />}
                      </button>
                      {openDropdown && (
                        <ul className="submenu">
                          {subLinks.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                href={subItem.href}
                                className={
                                  isActive(subItem.href) ? "active" : ""
                                }
                              >
                                <span
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {t(subItem.name)}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={href}
                      className={isActive(href) ? "active" : ""}
                    >
                      <span onClick={() => setIsMobileMenuOpen(false)}>
                        {t(name)}
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </Modal>
      </header>
      <div className="header_padding"></div>
    </>
  );
};

export default Header;
