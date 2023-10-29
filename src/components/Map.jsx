import React, { useState } from "react";
import "./Map.css";
import Block from "./Block";

var mapData = [
  { lat: 1, long: 1, type: "land", country: "India" },
  { lat: 1, long: 2, type: "land", country: "India" },
  { lat: 1, long: 3, type: "land", country: "India" },
  { lat: 1, long: 4, type: "land", country: "India" },
  { lat: 1, long: 5, type: "land", country: "Nepal" },
  { lat: 1, long: 6, type: "land", country: "Nepal" },
  { lat: 1, long: 7, type: "land", country: "Nepal" },
  { lat: 1, long: 8, type: "land", country: "Nepal" },
  { lat: 1, long: 9, type: "land", country: "China" },
  { lat: 1, long: 10, type: "land", country: "China" },
  { lat: 1, long: 11, type: "land", country: "China" },
  { lat: 1, long: 12, type: "land", country: "China" },

  { lat: 2, long: 1, type: "land", country: "India" },
  { lat: 2, long: 2, type: "land", country: "India" },
  { lat: 2, long: 3, type: "land", country: "India" },
  { lat: 2, long: 4, type: "land", country: "India" },
  { lat: 2, long: 5, type: "land", country: "India" },
  { lat: 2, long: 6, type: "land", country: "Nepal" },
  { lat: 2, long: 7, type: "land", country: "Nepal" },
  { lat: 2, long: 8, type: "land", country: "Nepal" },
  { lat: 2, long: 9, type: "land", country: "Nepal" },
  { lat: 2, long: 10, type: "land", country: "India" },
  { lat: 2, long: 11, type: "land", country: "China" },
  { lat: 2, long: 12, type: "land", country: "China" },

  { lat: 3, long: 1, type: "land", country: "India" },
  { lat: 3, long: 2, type: "land", country: "India" },
  { lat: 3, long: 3, type: "land", country: "India" },
  { lat: 3, long: 4, type: "land", country: "India" },
  { lat: 3, long: 5, type: "land", country: "India" },
  { lat: 3, long: 6, type: "land", country: "India" },
  { lat: 3, long: 7, type: "land", country: "India" },
  { lat: 3, long: 8, type: "land", country: "India" },
  { lat: 3, long: 9, type: "land", country: "India" },
  { lat: 3, long: 10, type: "land", country: "India" },
  { lat: 3, long: 11, type: "land", country: "India" },
  { lat: 3, long: 12, type: "land", country: "India" },

  { lat: 4, long: 1, type: "land", country: "India" },
  { lat: 4, long: 2, type: "land", country: "India" },
  { lat: 4, long: 3, type: "land", country: "India" },
  { lat: 4, long: 4, type: "land", country: "India" },
  { lat: 4, long: 5, type: "land", country: "India" },
  { lat: 4, long: 6, type: "land", country: "India" },
  { lat: 4, long: 7, type: "land", country: "India" },
  { lat: 4, long: 8, type: "land", country: "India" },
  { lat: 4, long: 9, type: "land", country: "Bangladesh", region: "Pabna" },
  { lat: 4, long: 10, type: "land", country: "Bangladesh", region: "Pabna" },
  { lat: 4, long: 11, type: "land", country: "India" },
  { lat: 4, long: 12, type: "land", country: "India" },

  { lat: 5, long: 1, type: "land", country: "India" },
  { lat: 5, long: 2, type: "land", country: "India" },
  { lat: 5, long: 3, type: "land", country: "India" },
  { lat: 5, long: 4, type: "land", country: "India" },
  { lat: 5, long: 5, type: "land", country: "India" },
  { lat: 5, long: 6, type: "land", country: "India" },
  { lat: 5, long: 7, type: "land", country: "India" },
  { lat: 5, long: 8, type: "land", country: "Bangladesh" },
  { lat: 5, long: 9, type: "land", country: "Bangladesh" },
  { lat: 5, long: 10, type: "land", country: "Bangladesh" },
  { lat: 5, long: 11, type: "land", country: "Bangladesh" },
  { lat: 5, long: 12, type: "land", country: "India" },

  { lat: 6, long: 1, type: "land", country: "India" },
  { lat: 6, long: 2, type: "land", country: "India" },
  { lat: 6, long: 3, type: "land", country: "India" },
  { lat: 6, long: 4, type: "land", country: "India" },
  { lat: 6, long: 5, type: "ocean" },
  { lat: 6, long: 6, type: "ocean" },
  { lat: 6, long: 7, type: "ocean" },
  { lat: 6, long: 8, type: "ocean" },
  { lat: 6, long: 9, type: "land", country: "Bangladesh" },
  { lat: 6, long: 10, type: "land", country: "Bangladesh" },
  { lat: 6, long: 11, type: "land", country: "Bangladesh" },
  { lat: 6, long: 12, type: "land", country: "India" },

  { lat: 7, long: 1, type: "land", country: "India" },
  { lat: 7, long: 2, type: "land", country: "India" },
  { lat: 7, long: 3, type: "land", country: "India" },
  { lat: 7, long: 4, type: "ocean" },
  { lat: 7, long: 5, type: "ocean" },
  { lat: 7, long: 6, type: "ocean" },
  { lat: 7, long: 7, type: "ocean" },
  { lat: 7, long: 8, type: "ocean" },
  { lat: 7, long: 9, type: "ocean" },
  { lat: 7, long: 10, type: "land", country: "Bangladesh" },
  { lat: 7, long: 11, type: "land", country: "Bangladesh", region: "Dhaka" },
  { lat: 7, long: 12, type: "land", country: "Bangladesh" },

  { lat: 8, long: 1, type: "land", country: "India" },
  { lat: 8, long: 2, type: "land", country: "India" },
  { lat: 8, long: 3, type: "ocean" },
  { lat: 8, long: 4, type: "ocean" },
  { lat: 8, long: 5, type: "ocean" },
  { lat: 8, long: 6, type: "ocean" },
  { lat: 8, long: 7, type: "ocean" },
  { lat: 8, long: 8, type: "ocean" },
  {
    lat: 8,
    long: 9,
    type: "ocean",
    localeType: "port",
    localeName: "Ctg",
    country: "Bangladesh",
  },
  {
    lat: 8,
    long: 10,
    type: "land",
    country: "Bangladesh",
  },
  { lat: 8, long: 11, type: "land", country: "Bangladesh" },
  { lat: 8, long: 12, type: "land", country: "Bangladesh" },

  { lat: 9, long: 1, type: "land", country: "India" },
  { lat: 9, long: 2, type: "ocean" },
  { lat: 9, long: 3, type: "ocean" },
  { lat: 9, long: 4, type: "ocean" },
  { lat: 9, long: 5, type: "ocean" },
  { lat: 9, long: 6, type: "ocean" },
  { lat: 9, long: 7, type: "ocean" },
  { lat: 9, long: 8, type: "ocean" },
  { lat: 9, long: 9, type: "ocean" },
  { lat: 9, long: 10, type: "ocean" },
  { lat: 9, long: 11, type: "land", country: "Bangladesh" },
  { lat: 9, long: 12, type: "land", country: "Bangladesh" },

  { lat: 10, long: 1, type: "ocean" },
  { lat: 10, long: 2, type: "ocean" },
  { lat: 10, long: 3, type: "ocean" },
  { lat: 10, long: 4, type: "ocean" },
  { lat: 10, long: 5, type: "ocean" },
  { lat: 10, long: 6, type: "ocean" },
  { lat: 10, long: 7, type: "land", country: "SriLanka" },
  { lat: 10, long: 8, type: "ocean" },
  { lat: 10, long: 9, type: "ocean" },
  { lat: 10, long: 10, type: "ocean" },
  { lat: 10, long: 11, type: "land", country: "Mayanmar" },
  { lat: 10, long: 12, type: "land", country: "Mayanmar" },

  { lat: 11, long: 1, type: "ocean" },
  { lat: 11, long: 2, type: "ocean" },
  { lat: 11, long: 3, type: "ocean" },
  { lat: 11, long: 4, type: "ocean" },
  { lat: 11, long: 5, type: "ocean" },
  { lat: 11, long: 6, type: "land", country: "SriLanka" },
  { lat: 11, long: 7, type: "land", country: "SriLanka" },
  { lat: 11, long: 8, type: "ocean" },
  { lat: 11, long: 9, type: "ocean" },
  { lat: 11, long: 10, type: "ocean" },
  { lat: 11, long: 11, type: "ocean" },
  { lat: 11, long: 12, type: "land", country: "Mayanmar" },

  { lat: 12, long: 1, type: "ocean" },
  { lat: 12, long: 2, type: "ocean" },
  { lat: 12, long: 3, type: "ocean" },
  { lat: 12, long: 4, type: "ocean" },
  { lat: 12, long: 5, type: "land", country: "SriLanka" },
  { lat: 12, long: 6, type: "land", country: "SriLanka" },
  { lat: 12, long: 7, type: "land", country: "SriLanka" },
  { lat: 12, long: 8, type: "land", country: "SriLanka" },
  { lat: 12, long: 9, type: "ocean" },
  { lat: 12, long: 10, type: "ocean" },
  { lat: 12, long: 11, type: "ocean" },
  { lat: 12, long: 12, type: "land", country: "Mayanmar" },
];

var regionData = {
  "": {
    infantry: 0,
  },
  Pabna: {
    country: "Bangladesh",
    infantry: 20,
    airDefenseArtillery: 2,
    armor: 5,
    fieldArtillery: 10,
    specialForces: 5,
  },
  Dhaka: {
    country: "Bangladesh",
    infantry: 10,
    airDefenseArtillery: 3,
    armor: 0,
    fieldArtillery: 0,
    specialForces: 0,
  },
};

function Map() {
  const [showCoordinates, setShowcoordinates] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("");
  console.log(selectedRegion);
  console.log(regionData[selectedRegion].infantry);

  return (
    <div className="map_container">
      {mapData.map((block) => (
        <div onClick={() => setSelectedRegion(block.region)}>
          <Block
            lat={block.lat}
            long={block.long}
            type={block.type}
            country={block.country}
            region={block.region}
            localeType={block.localeType}
            localeName={block.localeName}
            showCoordinates={showCoordinates}
          />
        </div>
      ))}
      <div>
        <button onClick={() => setShowcoordinates(!showCoordinates)}>
          Coordinates
        </button>
      </div>
      <div>
        Infantry: 30, Air Defense Artillery: 5, Armor: 5, Field Artillery: 10,
        Special Force: 5
      </div>
    </div>
  );
}

export default Map;
