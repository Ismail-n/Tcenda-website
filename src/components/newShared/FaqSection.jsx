import { useState } from "react";
import { ExternalLink, Minus, Plus } from "lucide-react";

const FaqSection = ({ heading, items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="new_shared_faq">
      <h2 className="new_shared_faq_heading">{heading}</h2>

      <div className="new_shared_faq_list">
        {items.map((item, index) => {
          const isOpen = index === openIndex;
          return (
            <div className="new_shared_faq_item" key={item.question}>
              <button
                type="button"
                className="new_shared_faq_question_row"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                {item.question}
                <span className="new_shared_faq_toggle">
                  {isOpen ? <Minus size={24} /> : <Plus size={24} />}
                </span>
              </button>
              {isOpen && item.answer && (
                <p className="new_shared_faq_answer">{item.answer}</p>
              )}
            </div>
          );
        })}
      </div>

      <p className="new_shared_faq_footer_note">
        For other questions visit our{" "}
        <a href="#">
          help center <ExternalLink size={24} />
        </a>
      </p>
    </section>
  );
};

export default FaqSection;
