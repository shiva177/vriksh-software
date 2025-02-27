"use client"

import { useState } from "react"
import "./SearchBar.css"

const SearchBar = () => {
  const [location, setLocation] = useState("")
  const [propertyType, setPropertyType] = useState("")
  const [priceRange, setPriceRange] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    console.log({ location, propertyType, priceRange })
    // Handle search functionality
  }

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSearch}>
        <div className="search-field">
          <label>Location</label>
          <select value={location} onChange={(e) => setLocation(e.target.value)} className="search-select">
            <option value="">Select Area</option>
            <option value="navrangpura">Navrangpura</option>
            <option value="satellite">Satellite</option>
            <option value="bodakdev">Bodakdev</option>
            <option value="prahlad-nagar">Prahlad Nagar</option>
          </select>
        </div>

        <div className="search-divider"></div>

        <div className="search-field">
          <label>Property Type</label>
          <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)} className="search-select">
            <option value="">Choose Property Type</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="house">House</option>
            <option value="plot">Plot</option>
          </select>
        </div>

        <div className="search-divider"></div>

        <div className="search-field">
          <label>Price Range</label>
          <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)} className="search-select">
            <option value="">Choose Price Range</option>
            <option value="0-50">₹0 - ₹50 Lakhs</option>
            <option value="50-100">₹50 - ₹1 Crore</option>
            <option value="100-200">₹1 - ₹2 Crores</option>
            <option value="200+">₹2+ Crores</option>
          </select>
        </div>

        <button type="submit" className="search-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </form>
    </div>
  )
}

export default SearchBar

