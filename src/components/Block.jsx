import React from "react";
import "./Block.css";
import Locale from "./Locale";

function Block({
  type,
  localeType,
  localeName,
  lat,
  long,
  region,
  showCoordinates,
  mapObj,
  regionObj,
  selectedRegion,
}) {
  let borderClassName = "";

  // console.log(mapObj);

  let leftRegion = mapObj[`${lat}${long - 1}`]?.region;
  let rightRegion = mapObj[`${lat}${long + 1}`]?.region;
  let bottomRegion = mapObj[`${lat + 1}${long}`]?.region;
  let topRegion = mapObj[`${lat - 1}${long}`]?.region;

  let country = regionObj[region]?.country;

  if (selectedRegion === region) {
    borderClassName += " selected_region";
  }

  if (type !== "ocean") {
    if (
      regionObj[region]?.country !== regionObj[leftRegion]?.country &&
      leftRegion &&
      mapObj[`${lat}${long - 1}`]?.type !== "ocean"
    ) {
      borderClassName += " leftBorder";
    } else if (
      region !== leftRegion &&
      leftRegion &&
      mapObj[`${lat}${long - 1}`]?.type !== "ocean"
    ) {
      borderClassName += " regionalLeftBorder";
    }

    if (
      regionObj[region]?.country !== regionObj[rightRegion]?.country &&
      rightRegion &&
      mapObj[`${lat}${long + 1}`]?.type !== "ocean"
    ) {
      borderClassName += " rightBorder";
    } else if (
      region !== rightRegion &&
      rightRegion &&
      mapObj[`${lat}${long + 1}`]?.type !== "ocean"
    ) {
      borderClassName += " regionalRightBorder";
    }

    if (
      regionObj[region]?.country !== regionObj[bottomRegion]?.country &&
      bottomRegion &&
      mapObj[`${lat + 1}${long}`]?.type !== "ocean"
    ) {
      borderClassName += " bottomBorder";
    } else if (
      region !== bottomRegion &&
      bottomRegion &&
      mapObj[`${lat + 1}${long}`]?.type !== "ocean"
    ) {
      borderClassName += " regionalBottomBorder";
    }

    if (
      regionObj[region]?.country !== regionObj[topRegion]?.country &&
      topRegion &&
      mapObj[`${lat - 1}${long}`]?.type !== "ocean"
    ) {
      borderClassName += " topBorder";
    } else if (
      region !== topRegion &&
      topRegion &&
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
