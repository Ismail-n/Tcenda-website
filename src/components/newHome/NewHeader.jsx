import Link from "next/link";
import { Container } from "react-bootstrap";
import { ArrowUpRight, SendHorizonal } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Service", href: "/our-services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact Us", href: "/contact-us" },
];

const NewHeader = () => {
  return (
    <header className="new_header">
      <Container>
        <div className="new_logo">
          <img
            src="/images/icons/tacendaIconWhite.svg"
            alt=""
            width={33}
            height={39}
          />{" "}
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

          <Link href="/contact-us" className="new_talk_btn">
            Let&apos;s Talk <ArrowUpRight size={16} />
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default NewHeader;
