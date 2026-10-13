import { ArrowUpRight } from "lucide-react";
import { Container } from "react-bootstrap";

const ideas = [
  {
    title: "AI Strategy & Consulting",
    text: "In today's data-driven world, success isn't just about collecting information — it's about transforming it into meaningful insights that drive strategic decisions. At Tacenda Technologies.",
  },
  {
    title: "AI Development & Integration",
    text: "In today's data-driven world, success isn't just about collecting information — it's about transforming it into meaningful insights that drive strategic decisions. At Tacenda Technologies.",
  },
  {
    title: "Data Science & Analytics",
    text: "In today's data-driven world, success isn't just about collecting information — it's about transforming it into meaningful insights that drive strategic decisions. At Tacenda Technologies.",
  },
  {
    title: "Full Stack Development",
    text: "In today's data-driven world, success isn't just about collecting information — it's about transforming it into meaningful insights that drive strategic decisions. At Tacenda Technologies.",
  },
  {
    title: "Website Development",
    text: "In today's data-driven world, success isn't just about collecting information — it's about transforming it into meaningful insights that drive strategic decisions. At Tacenda Technologies.",
  },
];

const IdeasSection = () => {
  return (
    <section className="new_about_ideas">
      <Container>
        <div className="new_about_ideas_header">
          <h2 className="new_about_ideas_title">
            Giving Your Business Some Great Ideas
          </h2>
          <p className="new_about_ideas_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit lorem
            sagittis, proin ut lectus sed ut. Enim egestas enim id duis.
          </p>
        </div>

        <div className="new_about_ideas_row">
          <div className="new_about_ideas_list">
            {ideas.map((idea) => (
              <div className="new_about_idea_item" key={idea.title}>
                <h3 className="new_about_idea_title">{idea.title}</h3>
                <p className="new_about_idea_text">{idea.text}</p>
                <span className="new_about_idea_arrow">
                  <img
                    src="/images/newAboutUs/arrow_right.png"
                    alt="Tacenda New Idea"
                  />
                </span>
              </div>
            ))}
          </div>

          <div className="new_about_ideas_image">
            <img
              src="/images/newAboutUs/giving_business_best_idea.png"
              alt="Tacenda product"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default IdeasSection;
