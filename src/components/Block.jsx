import React from "react";
import "./Block.css";

function Block({ type, locale, localePos, lat, long, country }) {
  return (
    <div className={`block_container ${type} ${country}`}>
      {lat},{long}
    </div>
  );
}

export default Block;
