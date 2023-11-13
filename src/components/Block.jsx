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

  // console.log(mapObj);

  console.log(mapObj[`${lat}${long - 1}`]?.type, lat, long);

  console.log(
    mapObj[`${lat}${long}`]?.country !== mapObj[`${lat}${long - 1}`]?.country
  );

  if (type !== "ocean") {
    if (
      mapObj[`${lat}${long}`]?.country !==
        mapObj[`${lat}${long - 1}`]?.country &&
      mapObj[`${lat}${long - 1}`]?.type !== "ocean"
    ) {
      borderClassName += " leftBorder";
    }

    if (
      mapObj[`${lat}${long}`]?.country !==
        mapObj[`${lat}${long + 1}`]?.country &&
      mapObj[`${lat}${long + 1}`]?.type !== "ocean"
    ) {
      borderClassName += " rightBorder";
    }

    if (
      mapObj[`${lat}${long}`]?.country !==
        mapObj[`${lat + 1}${long}`]?.country &&
      mapObj[`${lat + 1}${long}`]?.type !== "ocean"
    ) {
      borderClassName += " bottomBorder";
    }

    if (
      mapObj[`${lat}${long}`]?.country !==
        mapObj[`${lat - 1}${long}`]?.country &&
      mapObj[`${lat - 1}${long}`]?.type !== "ocean"
    ) {
      borderClassName += " topBorder";
    }
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
