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
          <span className="new_logo_mark">
            <SendHorizonal size={20} />
          </span>
          Tacenda.
        </div>

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
      </Container>
    </header>
  );
};

export default NewHeader;
