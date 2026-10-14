const solutions = [
  {
    eyebrow: "01 / WORKPLACE OPERATIONS",
    sector: "Flexible Office Sector",
    title: "Co-Working Space Solution",
    text: "We designed an end-to-end coworking platform that unifies membership, desk booking, and facility operations. The new system streamlines onboarding, automates access and billing, and gives operators a real-time view of occupancy across every community.",
    stats: [
      { value: "38%", label: "Higher Desk Occupancy" },
      { value: "65%", label: "Faster Member Onboarding" },
    ],
    image: "/images/newServices/service_cta_1.png",
  },
  {
    eyebrow: "02 / RESTAURANT OPERATIONS",
    sector: "Restaurant Sector",
    title: "Complete Restaurant Solution",
    text: "Unified front-of-house and back-of-house operations into one real-time restaurant platform. The system synchronizes reservations, ordering, kitchen dispatch, and inventory workflows, helping teams reduce delays and keep service consistent across every location.",
    stats: [
      { value: "< 45s", label: "Order-to-Kitchen Time" },
      { value: "24/7", label: "Service Reliability" },
    ],
    image: "/images/newServices/service_cta_2.png",
  },
  {
    eyebrow: "03 / REAL ESTATE PLATFORM",
    sector: "12K Active Listings",
    title: "Luxury Real Estate Solution",
    text: "We rebuilt a fragmented property-management workflow into a unified real-estate platform for brokers, buyers, and property operators. By redesigning the listing taxonomy, mapping engine, and lead-routing flow, we improved search relevance, accelerated tour scheduling, and shortened the path from first click to qualified inquiry.",
    stats: [
      { value: "68%", label: "Faster Property Search" },
      { value: "3.2x", label: "More Qualified Leads" },
    ],
    image: "/images/newServices/service_cta_3.png",
  },
];

const ServiceSolutions = () => {
  return (
    <section className="new_services_solutions">
      {solutions.map((solution, index) => (
        <div
          className={`new_services_solution_row ${
            index % 2 === 1 ? "new_services_solution_row_reverse" : ""
          }`}
          key={solution.title}
        >
          <div className="new_services_solution_image_wrap">
            <img
              src={solution.image}
              alt={solution.title}
              className="new_services_solution_image"
            />
          </div>

          <div className="new_services_solution_content">
            <p className="new_services_solution_eyebrow">
              <span className="service_eyebrow_text_left">
                {solution.eyebrow}
              </span>{" "}
              <span className="new_services_solution_dot">•</span>{" "}
              <span className="service_eyebrow_text_right">
                {solution.sector}
              </span>
            </p>
            <h3 className="new_services_solution_title">{solution.title}</h3>
            <p className="new_services_solution_text">{solution.text}</p>

            <div className="new_services_solution_stats">
              {solution.stats.map((stat) => (
                <div className="new_services_solution_stat" key={stat.label}>
                  <p className="new_services_solution_stat_value">
                    {stat.value}
                  </p>
                  <p className="new_services_solution_stat_label">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <button type="button" className="new_services_solution_btn">
              View Case Study <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>
      ))}

      <button type="button" className="new_services_more_projects_btn">
        More Projects
      </button>
    </section>
  );
};

export default ServiceSolutions;
