import Link from "next/link";
import { Container } from "react-bootstrap";

const siteMap = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/portfolio" },
  { name: "About", href: "/about-us" },
  { name: "Services", href: "/our-services" },
  { name: "Contact", href: "/contact-us" },
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
      <Container>
        <div className="new_footer_top">
          <div>
            <div className="new_footer_logo">
              <img
                src="/images/icons/tacendaIconWhite.svg"
                alt=""
                width={33}
                height={39}
              />{" "}
              Tacenda.
            </div>
            <p className="new_footer_about">
              We build and delivers intelligent technology solutions that help
              forward thinking organisations move faster, operate smarter and
              create lasting value.
            </p>
            <div className="new_socials">
              <a href="#" className="new_social_icon">
                <img
                  src="/images/footer/icon_linkedIn.svg"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                />
              </a>
              <a href="#" className="new_social_icon">
                <img
                  src="/images/footer/icon_Instagram.svg"
                  alt="Instagram"
                  width={32}
                  height={32}
                />
              </a>
              <a href="#" className="new_social_icon">
                <img
                  src="/images/footer/icon_YouTube.svg"
                  alt="YouTube"
                  width={32}
                  height={32}
                />
              </a>
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
            <p className="new_consult_text">
              Our experts are ready to help you.
            </p>
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
      </Container>
    </footer>
  );
};

export default NewFooter;
