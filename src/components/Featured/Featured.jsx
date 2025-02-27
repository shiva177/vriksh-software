import React from "react";
import PropertyCard from "./PropertyCard";
import "./Featured.css";

const properties = [
  {
    id: 1,
    imageUrl: "/Link.jpg", // Replace with real image later
    title: "Home in Merrick Way",
    price: "$540,000",
    location: "Merrick Way, Miami, FL 33134, USA",
  },
  {
    id: 2,
    imageUrl: "/Link.jpg",
    title: "Home in Merrick Way",
    price: "$540,000",
    location: "Merrick Way, Miami, FL 33134, USA",
  },
  {
    id: 3,
    imageUrl: "/Link.jpg",
    title: "Home in Merrick Way",
    price: "$540,000",
    location: "Merrick Way, Miami, FL 33134, USA",
  },
];

const Featured = () => {
  return (
    <section className="featured-section">
      <h2>Our featured exclusives</h2>
      <div className="filter-tabs">
        <span className="active">All</span>
        <span>For Rent</span>
        <span>For Sale</span>
      </div>
      <div className="featured-cards">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
};

export default Featured;
