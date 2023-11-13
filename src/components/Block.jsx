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
    } else if (
      mapObj[`${lat}${long}`]?.region !== mapObj[`${lat}${long - 1}`]?.region &&
      mapObj[`${lat}${long - 1}`]?.type !== "ocean"
    ) {
      borderClassName += " regionalLeftBorder";
    }

    if (
      mapObj[`${lat}${long}`]?.country !==
        mapObj[`${lat}${long + 1}`]?.country &&
      mapObj[`${lat}${long + 1}`]?.type !== "ocean"
    ) {
      borderClassName += " rightBorder";
    } else if (
      mapObj[`${lat}${long}`]?.region !== mapObj[`${lat}${long + 1}`]?.region &&
      mapObj[`${lat}${long + 1}`]?.type !== "ocean"
    ) {
      borderClassName += " regionalRightBorder";
    }

    if (
      mapObj[`${lat}${long}`]?.country !==
        mapObj[`${lat + 1}${long}`]?.country &&
      mapObj[`${lat + 1}${long}`]?.type !== "ocean"
    ) {
      borderClassName += " bottomBorder";
    } else if (
      mapObj[`${lat}${long}`]?.region !== mapObj[`${lat + 1}${long}`]?.region &&
      mapObj[`${lat + 1}${long}`]?.type !== "ocean"
    ) {
      borderClassName += " regionalBottomBorder";
    }

    if (
      mapObj[`${lat}${long}`]?.country !==
        mapObj[`${lat - 1}${long}`]?.country &&
      mapObj[`${lat - 1}${long}`]?.type !== "ocean"
    ) {
      borderClassName += " topBorder";
    } else if (
      mapObj[`${lat}${long}`]?.region !== mapObj[`${lat - 1}${long}`]?.region &&
      mapObj[`${lat - 1}${long}`]?.type !== "ocean"
    ) {
      borderClassName += " regionalTopBorder";
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
