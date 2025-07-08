import React, { useMemo } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { Container } from "react-bootstrap";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const { t } = useTranslation();
  const pathname = usePathname();

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
          <nav aria-label="Main navigation" className="menu_links">
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
        </div>
      </Container>
    </header>
  );
};

export default Header;
