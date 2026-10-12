import Link from "next/link";
import { ArrowUpRight, SendHorizonal } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/new-home" },
  { name: "About Us", href: "/new-about-us" },
  { name: "Service", href: "/new-our-services" },
  { name: "Portfolio", href: "/new-portfolio" },
  { name: "Contact Us", href: "/new-contact-us" },
];

const NewHeader = () => {
  return (
    <header className="new_header">
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

      <Link href="/new-contact-us" className="new_talk_btn">
        Let&apos;s Talk <ArrowUpRight size={16} />
      </Link>
    </header>
  );
};

export default NewHeader;
