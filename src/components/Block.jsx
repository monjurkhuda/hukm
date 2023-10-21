import React from "react";
import "./Block.css";
import Locale from "./Locale";

function Block({ type, localeType, localeName, lat, long, country }) {
  return (
    <div className={`block_container ${type} ${country}`}>
      {lat},{long}
      <Locale localeType={localeType} localeName={localeName} />
    </div>
  );
}

export default Block;
