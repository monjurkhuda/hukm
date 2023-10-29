import React from "react";
import "./Block.css";
import Locale from "./Locale";

function Block({
  type,
  localeType,
  localeName,
  lat,
  long,
  country,
  region,
  showCoordinates,
}) {
  return (
    <div className={`block_container ${type} ${country}`}>
      {showCoordinates && (
        <>
          {lat}, {long}
        </>
      )}
      <Locale localeType={localeType} localeName={region} />
    </div>
  );
}

export default Block;
