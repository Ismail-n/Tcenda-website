import { useState } from "react";
import { ChevronDown } from "lucide-react";

const MAX_DESCRIPTION_LENGTH = 100;

const ContactFormSection = ({ isFromLetsTalkPage = false }) => {
  const [description, setDescription] = useState("");

  return (
    <section className={`new_shared_form_section ${isFromLetsTalkPage ? "lets_talk_form" :""}`} id="contact-form">
      <h2 className="new_shared_form_heading">
        Drop us <span className="new_shared_form_highlight">Your Message</span>
      </h2>
      <p className="new_shared_form_subtext">
        Tell us about your requirements, and our team will get in touch with you
        within 24 hours.
      </p>
      <div className="new_shared_scroll_cue">
        <img
          src="/images/letsTalk/arrow_down.svg"
          alt=""
          className="new_shared_scroll_cue_icon"
        />{" "}
        Let&apos;s Talk
      </div>

      <form className="new_shared_form" onSubmit={(e) => e.preventDefault()}>
        <div className="new_shared_form_row">
          <div className="new_shared_field">
            <div className="new_shared_field_input_wrap">
              <input
                type="text"
                placeholder="Full Name"
                className="new_shared_field_input"
                required
              />
            </div>
          </div>
          <div className="new_shared_field">
            <div className="new_shared_field_input_wrap">
              <input
                type="email"
                placeholder="Input Filled"
                className="new_shared_field_input"
                required
              />
              <img
                src="/images/letsTalk/message_icon.svg"
                alt=""
                className="new_shared_field_icon"
              />
            </div>
          </div>
        </div>

        <div className="new_shared_form_row">
          <div className="new_shared_field">
            <div className="new_shared_field_input_wrap">
              <input
                type="tel"
                placeholder="Phone Number"
                className="new_shared_field_input"
              />
            </div>
          </div>
          <div className="new_shared_field">
            <div className="new_shared_field_input_wrap">
              <input
                type="text"
                placeholder="Company Name"
                className="new_shared_field_input"
              />
            </div>
          </div>
        </div>

        <div className="new_shared_form_row">
          <div className="new_shared_field">
            <div className="new_shared_field_input_wrap">
              <select className="new_shared_field_select" defaultValue="">
                <option value="" disabled>
                  Services
                </option>
                <option value="ai">AI & Automation</option>
                <option value="web">Web & Digital Platforms</option>
                <option value="software">Custom Software</option>
                <option value="data">Data & Analytics</option>
              </select>
              <ChevronDown size={16} className="new_shared_field_icon" />
            </div>
          </div>
          <div className="new_shared_field">
            <div className="new_shared_field_input_wrap">
              <select className="new_shared_field_select" defaultValue="">
                <option value="" disabled>
                  Budget
                </option>
                <option value="small">Under $10k</option>
                <option value="medium">$10k - $50k</option>
                <option value="large">$50k+</option>
              </select>
              <ChevronDown size={16} className="new_shared_field_icon" />
            </div>
          </div>
        </div>

        <div className="new_shared_textarea_wrap">
          <textarea
            placeholder="Describe your project"
            className="new_shared_textarea"
            maxLength={MAX_DESCRIPTION_LENGTH}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <span className="new_shared_char_count">
            {description.length}/{MAX_DESCRIPTION_LENGTH}
          </span>
        </div>

        <button type="submit" className="new_shared_submit_btn">
          <span className="new_shared_submit_icon">
            <img src="/images/letsTalk/arrow_right.svg" alt="" />
          </span>
          Send
        </button>
      </form>
    </section>
  );
};

export default ContactFormSection;
