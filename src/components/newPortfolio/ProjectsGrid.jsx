import { ArrowUpRight } from "lucide-react";

const baseProjects = [
  {
    title: "Ashjar Space",
    text: "We're proud to have delivered a powerful co-working space app tailored for the Saudi Arabian market.",
    image: "/images/portfolio/ashjarSpace.png",
  },
  {
    title: "Cup Crew",
    text: "With us, turn every coffee craving into a digital experience — smart, fast, and brewed to perfection.",
    image: "/images/portfolio/cupCrew.png",
  },
  {
    title: "Travel Agency Website",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus nibh cursus integer.",
    image: "/images/portfolio/burgerBuzz.webp",
  },
  {
    title: "AYZ Rentals",
    text: "We built ayz rentals for Rent furniture that fits your lifestyle, anytime.",
    image: "/images/portfolio/ayzRentals.png",
  },
];

const projects = [...baseProjects, ...baseProjects];

const ProjectsGrid = () => {
  return (
    <section className="new_portfolio_projects">
      <div className="new_portfolio_projects_grid">
        {projects.map((project, index) => (
          <div className="new_portfolio_project_card" key={`${project.title}-${index}`}>
            <img
              src={project.image}
              alt={project.title}
              className="new_portfolio_project_image"
            />
            <div className="new_portfolio_project_header">
              <div>
                <h3 className="new_portfolio_project_title">{project.title}</h3>
                <p className="new_portfolio_project_text">{project.text}</p>
              </div>
              <span className="new_portfolio_project_arrow">
                <ArrowUpRight size={18} />
              </span>
            </div>
          </div>
        ))}
      </div>

      <button type="button" className="new_portfolio_more_projects_btn">
        More Projects
      </button>
    </section>
  );
};

export default ProjectsGrid;
