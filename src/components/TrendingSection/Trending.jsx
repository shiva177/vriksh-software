import React from "react";
import TrendingCard from "./TrendingCard";
import "./Trending.css";

const trendingArticles = [
  {
    id: 1,
    imageUrl: "/Skyline 1 (1).jpg",
    title: "As The Real Estate Market Heats Up, Here’s How First-time Buyers Can Keep Their Cool",
    link: "#",
  },
  {
    id: 2,
    imageUrl: "/wave-img-7.jpg",
    title: "Real Estate Market Heats Up, Here’s How First-time Buyers Can Keep Their Cool",
    link: "#",
  },
  {
    id: 3,
    imageUrl: "/66f29a516e9d0.jpg.jpg",
    title: "Here’s How First-time Buyers Can Keep Their Cool As The Real Estate Market Heats Up",
    link: "#",
  },
];

const Trending = () => {
  return (
    <section className="trending-section">
      <h2>What’s in Trending</h2>
      <div className="trending-container">
        {trendingArticles.map((article) => (
          <TrendingCard key={article.id} article={article} />
        ))}
      </div>
      {/* <a href="#" className="view-all">View All &gt;</a> */}
    </section>
  );
};

export default Trending;
