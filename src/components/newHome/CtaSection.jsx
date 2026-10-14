const CtaSection = () => {
  return (
    <section className="new_cta">
      <h2 className="new_cta_title">
        Ready to <span className="new_cta_highlight">build something</span>
      </h2>
      <p className="new_cta_text">
        Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
        cillum dolor. Voluptate exercitation incididunt aliquip.
      </p>
      <form
        className="new_cta_form"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          placeholder="Enter Your Email"
          className="new_cta_input"
          required
        />
        <button type="submit" className="new_cta_submit">
          Get Started
        </button>
      </form>
    </section>
  );
};

export default CtaSection;
