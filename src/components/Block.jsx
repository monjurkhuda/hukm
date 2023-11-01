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
  mapObj,
}) {
  let borderClassName = "";

  console.log(
    mapObj[`${lat}${long}`]?.country,
    mapObj[`${lat}${long - 1}`]?.country,
    lat,
    long
  );

  console.log(
    mapObj[`${lat}${long}`]?.country !== mapObj[`${lat}${long - 1}`]?.country
  );

  if (
    mapObj[`${lat}${long}`]?.country !== mapObj[`${lat}${long - 1}`]?.country
  ) {
    borderClassName += " leftBorder";
  }

  if (
    mapObj[`${lat}${long}`]?.country !== mapObj[`${lat}${long + 1}`]?.country
  ) {
    borderClassName += " rightBorder";
  }

  if (
    mapObj[`${lat}${long}`]?.country !== mapObj[`${lat + 1}${long}`]?.country
  ) {
    borderClassName += " bottomBorder";
  }

  if (
    mapObj[`${lat}${long}`]?.country !== mapObj[`${lat - 1}${long}`]?.country
  ) {
    borderClassName += " topBorder";
  }

  return (
    <div className={`block_container ${type} ${country} ${borderClassName}`}>
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
