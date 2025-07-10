import React, { useMemo, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { Container, Modal } from "react-bootstrap";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const { t } = useTranslation();
  const pathname = usePathname();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const homeLinks = useMemo(
    () => [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about-us" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Our Services", href: "/our-services" },
      { name: "Contact Us", href: "/contact-us" },
    ],
    []
  );

  const isActive = (href) => pathname === href || pathname === href + "/";

  const handleMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
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
                  <Link href={href} className={isActive(href) ? "active" : ""}>
                    {t(name)}
                  </Link>
                </li>
              ))}
            </ul>
            <LanguageSwitcher />
          </nav>
          {/* Mobile Menu Icon */}
          <div className="mobile_menu_icon d-lg-none" onClick={handleMenuClick}>
            {isMobileMenuOpen ? (
              <Image
                src={"/images/icons/close.svg"}
                width={24}
                height={24}
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
            width={24}
            height={24}
            alt="menu"
            className="close_icon"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        </div>
        <nav aria-label="Main navigation" className="mobile_menu_links">
          <ul>
            {homeLinks?.map(({ href, name }, index) => (
              <li key={index}>
                <Link href={href} className={isActive(href) ? "active" : ""}>
                  {t(name)}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
        </nav>
      </Modal>
    </header>
  );
};

export default Header;
