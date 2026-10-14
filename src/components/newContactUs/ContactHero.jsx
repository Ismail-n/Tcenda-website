const ContactHero = () => {
  return (
    <section className="new_contact_hero">
      <h1 className="new_contact_hero_title">
        Book a Free Consultation
        <br />
        with Our Technology Experts.
      </h1>

      <div className="new_contact_wave_wrap">
        <svg viewBox="0 0 1440 240" preserveAspectRatio="none" aria-hidden="true">
          <g fill="none" stroke="#d7d7e0" strokeWidth="1">
            <path d="M0,160 C 200,40 400,220 600,120 S 1000,40 1440,140" />
            <path d="M0,170 C 220,70 420,200 620,130 S 1020,60 1440,150" opacity="0.8" />
            <path d="M0,180 C 240,100 440,210 640,150 S 1040,90 1440,170" opacity="0.6" />
            <path d="M0,190 C 260,130 460,215 660,170 S 1060,120 1440,185" opacity="0.4" />
            <path d="M0,200 C 280,160 480,220 680,190 S 1080,150 1440,200" opacity="0.3" />
          </g>
        </svg>
      </div>
    </section>
  );
};

export default ContactHero;
