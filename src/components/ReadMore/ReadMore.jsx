import React from "react";
import "./ReadMore.css";

const ReadMore = ({ link }) => {
  return <a href={link} className="read-more">Read More &gt;</a>;
};

export default ReadMore;
