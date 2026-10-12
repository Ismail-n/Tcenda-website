const offices = [
  {
    name: "Saudi Arabia",
    address: "Prince Mohammed Bin Salman Bin Abdulaziz Rd, Riyadh 13315",
    image: "/images/newAboutUs/office1.jpg",
  },
  {
    name: "Belgium",
    address: "Veeboslaan 2 Sterrebeek 2933, Brussels",
    image: "/images/newAboutUs/office2.jpg",
  },
  {
    name: "United States",
    address: "45 Main Street, Suite 1000, Brooklyn, New York 11201",
    image: "/images/newAboutUs/office3.jpg",
  },
  {
    name: "Saudi Arabia",
    address: "Prince Mohammed Bin Salman Bin Abdulaziz Rd, Riyadh 13315",
    image: "/images/newAboutUs/office4.jpg",
  },
  {
    name: "United States",
    address: "45 Main Street, Suite 1000, Brooklyn, New York 11201",
    image: "/images/newAboutUs/office5.jpg",
  },
];

const LocationsSection = () => {
  const firstRow = offices.slice(0, 3);
  const secondRow = offices.slice(3);

  return (
    <section className="new_about_locations">
      <h2 className="new_about_section_heading">
        Come and <span className="new_about_section_highlight">Meet Us</span>
      </h2>
      <p className="new_about_section_subtext">
        Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
        cillum dolor. Voluptate exercitation incididunt aliquip.
      </p>

      <div className="new_about_map_wrap">
        <img
          src="/images/icons/footerMap.webp"
          alt="World map"
          className="new_about_map_image"
        />
      </div>

      <div className="new_about_office_grid">
        {firstRow.map((office, index) => (
          <div className="new_about_office_card" key={`${office.name}-${index}`}>
            <img src={office.image} alt={office.name} className="new_about_office_image" />
            <div className="new_about_office_body">
              <p className="new_about_office_name">{office.name}</p>
              <p className="new_about_office_address">{office.address}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="new_about_office_grid_second">
        {secondRow.map((office, index) => (
          <div className="new_about_office_card" key={`${office.name}-second-${index}`}>
            <img src={office.image} alt={office.name} className="new_about_office_image" />
            <div className="new_about_office_body">
              <p className="new_about_office_name">{office.name}</p>
              <p className="new_about_office_address">{office.address}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocationsSection;
