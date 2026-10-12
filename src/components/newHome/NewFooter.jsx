import Link from "next/link";
import { Linkedin, Instagram, Youtube, SendHorizonal } from "lucide-react";

const siteMap = [
  { name: "Home", href: "/new-home" },
  { name: "Work", href: "/new-portfolio" },
  { name: "About", href: "/new-about-us" },
  { name: "Services", href: "/new-our-services" },
  { name: "Contact", href: "/new-contact-us" },
];

const company = [
  { name: "Terms Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Cookies", href: "#" },
  { name: "Careers", href: "#" },
];

const NewFooter = () => {
  return (
    <footer className="new_footer">
      <div className="new_footer_top">
        <div>
          <div className="new_footer_logo">
            <SendHorizonal size={18} style={{ transform: "rotate(-45deg)" }} />
            Tacenda.
          </div>
          <p className="new_footer_about">
            We build and delivers intelligent technology solutions that help
            forward thinking organisations move faster, operate smarter and
            create lasting value.
          </p>
          <div className="new_socials">
            <span className="new_social_icon">
              <Linkedin size={16} />
            </span>
            <span className="new_social_icon">
              <Instagram size={16} />
            </span>
            <span className="new_social_icon">
              <Youtube size={16} />
            </span>
          </div>
        </div>

        <div className="new_footer_col">
          <h4>Contact</h4>
          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Phone: (33) 123- 4567</li>
            <li>Email: hello@tacenda.com</li>
          </ul>
        </div>

        <div className="new_footer_col">
          <h4>SiteMap</h4>
          <ul>
            {siteMap.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="new_footer_col">
          <h4>Company</h4>
          <ul>
            {company.map((item) => (
              <li key={item.name}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="new_footer_bottom_row">
        <div>
          <p className="new_consult_title">Book a Free Consultation</p>
          <p className="new_consult_text">Our experts are ready to help you.</p>
        </div>
        <form
          className="new_footer_form"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter Your Email"
            className="new_footer_input"
            required
          />
          <button type="submit" className="new_footer_submit">
            Send
          </button>
        </form>
      </div>

      <p className="new_copyright">© 2026 Tacenda. All rights reserved.</p>
    </footer>
  );
};

export default NewFooter;
