import { FiberManualRecord, Info } from "@mui/icons-material";
import React from "react";
import "./Widgets.css";

const Widgets = () => {
  const newArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading} </h4>
        <p>{subtitle} </p>
      </div>
    </div>
  );
  return (
    <div className="widget">
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <Info />
      </div>
      {newArticle(
        "Roi is doing great despite the obstacles",
        "Top News - 9099 readers"
      )}
      {newArticle("Coronavirus: UK Updates", "Top News - 800 readers")}
      {newArticle("Tesla hits new highs", "cars & auto - 300 readers")}
      {newArticle("Bitcoin crashes Further ", "Crypto - 5000 readers")}
      {newArticle("is Redux too good?", "code - 500 readers")}
      {newArticle("Chuwkuma a software Engineer?", "code - 200 readers")}
    </div>
  );
};

export default Widgets;
