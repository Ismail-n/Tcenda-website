import { useState } from "react";

const allMembers = [
  { name: "Albert Flores", role: "as CTO & Co-Founder", image: "/images/newAboutUs/member1.jpg" },
  { name: "Zarror Nibros", role: "as CTO & Co-Founder", image: "/images/newAboutUs/member2.jpg" },
  { name: "Robert Fox", role: "as CTO & Co-Founder", image: "/images/newAboutUs/member3.jpg" },
  { name: "Ronald Richards", role: "as CTO & Co-Founder", image: "/images/newAboutUs/member4.jpg" },
  { name: "Jenny Wilson", role: "as CTO & Co-Founder", image: "/images/newAboutUs/member5.jpg" },
  { name: "Jane Cooper", role: "as CTO & Co-Founder", image: "/images/newAboutUs/member6.jpg" },
];

const PAGE_SIZE = 6;

const TeamSection = () => {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const members = allMembers.slice(0, visibleCount);

  return (
    <section className="new_about_team">
      <h2 className="new_about_section_heading">
        Meet our <span className="new_about_section_highlight">Amazing team</span>
      </h2>
      <p className="new_about_section_subtext">
        Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
        cillum dolor. Voluptate exercitation incididunt aliquip.
      </p>

      <div className="new_about_team_grid">
        {members.map((member) => (
          <div className="new_about_team_card" key={member.name}>
            <img src={member.image} alt={member.name} />
            <div className="new_about_team_card_info">
              <p className="new_about_team_name">{member.name}</p>
              <p className="new_about_team_role">{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="new_about_load_more_btn"
        onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
        disabled={visibleCount >= allMembers.length}
      >
        Load more member
      </button>
    </section>
  );
};

export default TeamSection;
