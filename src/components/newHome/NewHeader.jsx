import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import { ArrowUpRight, Menu, X } from "lucide-react";
import TacendaIcon from "@/components/icons/TacendaIcon";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Service", href: "/our-services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact Us", href: "/contact-us" },
];

const NewHeader = () => {
  const router = useRouter();
  const isTalkActive =
    router.pathname === "/contact-us" || router.pathname === "/lets-talk";
  const isLetsTalkPage = router.pathname === "/lets-talk";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className={`new_header${isLetsTalkPage ? " new_header_muted" : ""}`}>
      <Container>
        <div className="new_logo">
          <TacendaIcon color={isLetsTalkPage ? "#868686" : "#FFFFFF"} size={33} />{" "}
          Tacenda.
        </div>

        <div className="header_right">
          <ul className="new_nav">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>

          <Link
            href="/lets-talk"
            className={`new_talk_btn${isTalkActive ? " new_talk_btn_active" : ""}`}
          >
            Let&apos;s Talk <ArrowUpRight size={16} />
          </Link>

          <button
            type="button"
            className="new_menu_toggle"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <Menu size={24} />
          </button>
        </div>
      </Container>

      {isMenuOpen && (
        <div className="new_mobile_menu">
          <div className="new_mobile_menu_top">
            <div className="new_logo">
              <TacendaIcon color="#FFFFFF" size={33} /> Tacenda.
            </div>
            <button
              type="button"
              className="new_menu_toggle"
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>

          <ul className="new_mobile_menu_links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} onClick={() => setIsMenuOpen(false)}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/lets-talk"
            className="new_talk_btn new_mobile_menu_talk_btn"
            onClick={() => setIsMenuOpen(false)}
          >
            Let&apos;s Talk <ArrowUpRight size={16} />
          </Link>
        </div>
      )}
    </header>
  );
};

export default NewHeader;
