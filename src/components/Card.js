import React from "react";

import "./Card.css";

export const Card = ({
  symbol,
  meaning,
}) => {
  return (
    <div className="card-container">
      {symbol && <h1 className="card-symbol">{symbol}</h1>}
      {meaning && <h2 className="card-meaning">{meaning}</h2>}
    </div>
  );
};