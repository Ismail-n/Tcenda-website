import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stats = [
  { number: "250+", label: "Happy Customer" },
  { number: "30+", label: "Business Partners" },
  { number: "10+", label: "Unicorn Brands" },
];

const WhyChooseUs = () => {
  return (
    <section className="new_why_us">
      <div className="new_why_us_left">
        <div className="top">
          <div className="new_section_eyebrow">
            <img
              src="/images/newHome/whatTacendaDoBeforeIcon.svg"
              alt=""
              width={17}
              height={19}
            />{" "}
            <span className="new_eyebrow_text">Why Choose Tacenda</span>
          </div>
          <h2>Team of experts is ready to help you</h2>
          <p>
            We architect intelligent systems that create measurable value. Deep
            expertise in AI, cloud, data and engineering — delivered by senior
            teams who care as much about the outcome as the code.
          </p>
          <button type="button" className="new_outline_btn">
            Learn More
          </button>
        </div>

        <div className="new_stats">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="new_stat_number">{stat.number}</p>
              <p className="new_stat_label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="new_why_us_right">
        <div className="new_team_frame">
          <div className="new_team_frame_border" />
          <div className="new_team_card">
            <div className="new_team_image">
              <img src="/images/newHome/meet_our_team.png" alt="Team member" />
            </div>
            <Link href="/new-about-us" className="new_meet_team">
              Meet Our Team <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
