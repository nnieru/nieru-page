import React from "react";
import "./card.scss";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="card">
      <div className="card-inner">{children}</div>
    </div>
  );
};

export default Card;
