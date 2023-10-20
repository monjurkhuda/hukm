import React from "react";
import "./Block.css";

function Block({ type, locale, localePos, lat, long }) {
  return (
    <div className={`block_container ${type}`}>
      {lat},{long}
    </div>
  );
}

export default Block;
