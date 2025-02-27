import "./Properties.css";

const propertiesData = [
  {
    id: 1,
    image: "/cta-1.jpg.svg",
    title: "The Grand Towers",
    location: "Navrangpura, Ahmedabad",
    className: "grid-item grid-item-tall",
  },
  {
    id: 2,
    image: "/cta-3.jpg.svg",
    title: "Green Valley Heights",
    location: "Satellite, Ahmedabad",
    className: "grid-item",
  },
  {
    id: 3,
    image: "/cta-4.jpg.svg",
    title: "Urban Square",
    location: "Prahlad Nagar, Ahmedabad",
    className: "grid-item",
  },
  {
    id: 4,
    image: "/cta-2.0.jpg.svg",
    title: "Sky Heights",
    location: "Bodakdev, Ahmedabad",
    className: "grid-item grid-item-wide",
  },
];

const Properties = () => {
  return (
    <section className="properties-section">
      <div className="properties-container">
        <div className="properties-content">
          <h2 className="properties-title">
            Your Trusted Gateway to Ahmedabad's Finest Homes
          </h2>
          <p className="properties-description">
            Mindestate is a dedicated real estate consultancy focused on bringing Ahmedabad's most promising
            under-construction residential projects to discerning homebuyers. We simplify the home-buying process with
            expert market insights, personalized assistance, and a commitment to transparency.
          </p>
          <button className="read-more-btn">
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="properties-grid">
          {propertiesData.map((property) => (
            <div key={property.id} className={property.className}>
              <img src={property.image} alt={property.title} loading="lazy" />
              <div className="property-overlay">
                <h3>{property.title}</h3>
                <p>{property.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
