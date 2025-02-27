import React from "react";

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.imageUrl} alt={property.title} />
      <div className="property-info">
        <h3>{property.title}</h3>
        <h4>{property.price}</h4>
        <p>{property.location}</p>
        <div className="property-buttons">
          <button className="whatsapp-btn">Whatsapp Us</button>
          <button className="call-btn">Get a Call</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
