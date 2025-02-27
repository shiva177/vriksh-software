import React from "react";
import ReadMore from "../ReadMore/ReadMore";
import "./Trending.css";

const TrendingCard = ({ article }) => {
  return (
    <div className="trending-card">
      <img src={article.imageUrl} alt={article.title} className="trending-img" />
      <h3>{article.title}</h3>
      <ReadMore link={article.link} />
    </div>
  );
};

export default TrendingCard;
