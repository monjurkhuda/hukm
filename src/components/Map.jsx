import React, { useState } from "react";
import "./Map.css";
import Block from "./Block";

// var mapData = [
//   { lat: 1, long: 1, type: "land", country: "India" },
//   { lat: 1, long: 2, type: "land", country: "India" },
//   { lat: 1, long: 3, type: "land", country: "India" },
//   { lat: 1, long: 4, type: "land", country: "India" },
//   { lat: 1, long: 5, type: "land", country: "Nepal" },
//   { lat: 1, long: 6, type: "land", country: "Nepal" },
//   { lat: 1, long: 7, type: "land", country: "Nepal" },
//   { lat: 1, long: 8, type: "land", country: "Nepal" },
//   { lat: 1, long: 9, type: "land", country: "China" },
//   { lat: 1, long: 10, type: "land", country: "China" },
//   { lat: 1, long: 11, type: "land", country: "China" },
//   { lat: 1, long: 12, type: "land", country: "China" },

//   { lat: 2, long: 1, type: "land", country: "India" },
//   { lat: 2, long: 2, type: "land", country: "India" },
//   { lat: 2, long: 3, type: "land", country: "India" },
//   { lat: 2, long: 4, type: "land", country: "India" },
//   { lat: 2, long: 5, type: "land", country: "India" },
//   { lat: 2, long: 6, type: "land", country: "Nepal" },
//   { lat: 2, long: 7, type: "land", country: "Nepal" },
//   { lat: 2, long: 8, type: "land", country: "Nepal" },
//   { lat: 2, long: 9, type: "land", country: "Nepal" },
//   { lat: 2, long: 10, type: "land", country: "India", region: "Manipur" },
//   { lat: 2, long: 11, type: "land", country: "China" },
//   { lat: 2, long: 12, type: "land", country: "China" },

//   { lat: 3, long: 1, type: "land", country: "India" },
//   { lat: 3, long: 2, type: "land", country: "India" },
//   { lat: 3, long: 3, type: "land", country: "India" },
//   { lat: 3, long: 4, type: "land", country: "India" },
//   { lat: 3, long: 5, type: "land", country: "India" },
//   { lat: 3, long: 6, type: "land", country: "India" },
//   { lat: 3, long: 7, type: "land", country: "India" },
//   { lat: 3, long: 8, type: "land", country: "India" },
//   { lat: 3, long: 9, type: "land", country: "India", region: "Manipur" },
//   { lat: 3, long: 10, type: "land", country: "India", region: "Manipur" },
//   { lat: 3, long: 11, type: "land", country: "India" },
//   { lat: 3, long: 12, type: "land", country: "India" },

//   { lat: 4, long: 1, type: "land", country: "India" },
//   { lat: 4, long: 2, type: "land", country: "India" },
//   { lat: 4, long: 3, type: "land", country: "India" },
//   { lat: 4, long: 4, type: "land", country: "India" },
//   { lat: 4, long: 5, type: "land", country: "India" },
//   { lat: 4, long: 6, type: "land", country: "India" },
//   { lat: 4, long: 7, type: "land", country: "India" },
//   { lat: 4, long: 8, type: "land", country: "India" },
//   { lat: 4, long: 9, type: "land", country: "Bangladesh", region: "Pabna" },
//   { lat: 4, long: 10, type: "land", country: "Bangladesh", region: "Pabna" },
//   { lat: 4, long: 11, type: "land", country: "India" },
//   { lat: 4, long: 12, type: "land", country: "India" },

//   { lat: 5, long: 1, type: "land", country: "India" },
//   { lat: 5, long: 2, type: "land", country: "India" },
//   { lat: 5, long: 3, type: "land", country: "India" },
//   { lat: 5, long: 4, type: "land", country: "India" },
//   { lat: 5, long: 5, type: "land", country: "India" },
//   { lat: 5, long: 6, type: "land", country: "India" },
//   { lat: 5, long: 7, type: "land", country: "India" },
//   { lat: 5, long: 8, type: "land", country: "Bangladesh" },
//   { lat: 5, long: 9, type: "land", country: "Bangladesh" },
//   { lat: 5, long: 10, type: "land", country: "Bangladesh" },
//   { lat: 5, long: 11, type: "land", country: "Bangladesh" },
//   { lat: 5, long: 12, type: "land", country: "India" },

//   { lat: 6, long: 1, type: "land", country: "India" },
//   { lat: 6, long: 2, type: "land", country: "India" },
//   { lat: 6, long: 3, type: "land", country: "India" },
//   { lat: 6, long: 4, type: "land", country: "India" },
//   { lat: 6, long: 5, type: "ocean" },
//   { lat: 6, long: 6, type: "ocean" },
//   { lat: 6, long: 7, type: "ocean" },
//   { lat: 6, long: 8, type: "ocean" },
//   { lat: 6, long: 9, type: "land", country: "Bangladesh" },
//   { lat: 6, long: 10, type: "land", country: "Bangladesh" },
//   { lat: 6, long: 11, type: "land", country: "Bangladesh" },
//   { lat: 6, long: 12, type: "land", country: "India" },

//   { lat: 7, long: 1, type: "land", country: "India" },
//   { lat: 7, long: 2, type: "land", country: "India" },
//   { lat: 7, long: 3, type: "land", country: "India" },
//   { lat: 7, long: 4, type: "ocean" },
//   { lat: 7, long: 5, type: "ocean" },
//   { lat: 7, long: 6, type: "ocean" },
//   { lat: 7, long: 7, type: "ocean" },
//   { lat: 7, long: 8, type: "ocean" },
//   { lat: 7, long: 9, type: "ocean" },
//   { lat: 7, long: 10, type: "land", country: "Bangladesh" },
//   { lat: 7, long: 11, type: "land", country: "Bangladesh", region: "Dhaka" },
//   { lat: 7, long: 12, type: "land", country: "Bangladesh" },

//   { lat: 8, long: 1, type: "land", country: "India" },
//   { lat: 8, long: 2, type: "land", country: "India" },
//   { lat: 8, long: 3, type: "ocean" },
//   { lat: 8, long: 4, type: "ocean" },
//   { lat: 8, long: 5, type: "ocean" },
//   { lat: 8, long: 6, type: "ocean" },
//   { lat: 8, long: 7, type: "ocean" },
//   { lat: 8, long: 8, type: "ocean" },
//   {
//     lat: 8,
//     long: 9,
//     type: "ocean",
//     localeType: "port",
//     localeName: "Ctg",
//     country: "Bangladesh",
//   },
//   {
//     lat: 8,
//     long: 10,
//     type: "land",
//     country: "Bangladesh",
//   },
//   { lat: 8, long: 11, type: "land", country: "Bangladesh" },
//   { lat: 8, long: 12, type: "land", country: "Bangladesh" },

//   { lat: 9, long: 1, type: "land", country: "India" },
//   { lat: 9, long: 2, type: "ocean" },
//   { lat: 9, long: 3, type: "ocean" },
//   { lat: 9, long: 4, type: "ocean" },
//   { lat: 9, long: 5, type: "ocean" },
//   { lat: 9, long: 6, type: "ocean" },
//   { lat: 9, long: 7, type: "ocean" },
//   { lat: 9, long: 8, type: "ocean" },
//   { lat: 9, long: 9, type: "ocean" },
//   { lat: 9, long: 10, type: "ocean" },
//   { lat: 9, long: 11, type: "land", country: "Bangladesh" },
//   { lat: 9, long: 12, type: "land", country: "Bangladesh" },

//   { lat: 10, long: 1, type: "ocean" },
//   { lat: 10, long: 2, type: "ocean" },
//   { lat: 10, long: 3, type: "ocean" },
//   { lat: 10, long: 4, type: "ocean" },
//   { lat: 10, long: 5, type: "ocean" },
//   { lat: 10, long: 6, type: "ocean" },
//   { lat: 10, long: 7, type: "land", country: "SriLanka" },
//   { lat: 10, long: 8, type: "ocean" },
//   { lat: 10, long: 9, type: "ocean" },
//   { lat: 10, long: 10, type: "ocean" },
//   { lat: 10, long: 11, type: "land", country: "Mayanmar" },
//   { lat: 10, long: 12, type: "land", country: "Mayanmar" },

//   { lat: 11, long: 1, type: "ocean" },
//   { lat: 11, long: 2, type: "ocean" },
//   { lat: 11, long: 3, type: "ocean" },
//   { lat: 11, long: 4, type: "ocean" },
//   { lat: 11, long: 5, type: "ocean" },
//   { lat: 11, long: 6, type: "land", country: "SriLanka" },
//   { lat: 11, long: 7, type: "land", country: "SriLanka" },
//   { lat: 11, long: 8, type: "ocean" },
//   { lat: 11, long: 9, type: "ocean" },
//   { lat: 11, long: 10, type: "ocean" },
//   { lat: 11, long: 11, type: "ocean" },
//   { lat: 11, long: 12, type: "land", country: "Mayanmar" },

//   { lat: 12, long: 1, type: "ocean" },
//   { lat: 12, long: 2, type: "ocean" },
//   { lat: 12, long: 3, type: "ocean" },
//   { lat: 12, long: 4, type: "ocean" },
//   { lat: 12, long: 5, type: "land", country: "SriLanka" },
//   { lat: 12, long: 6, type: "land", country: "SriLanka" },
//   { lat: 12, long: 7, type: "land", country: "SriLanka" },
//   { lat: 12, long: 8, type: "land", country: "SriLanka" },
//   { lat: 12, long: 9, type: "ocean" },
//   { lat: 12, long: 10, type: "ocean" },
//   { lat: 12, long: 11, type: "ocean" },
//   { lat: 12, long: 12, type: "land", country: "Mayanmar" },
// ];

var mapData = [
  { lat: 1, long: 1, type: "land", country: "India" },
  { lat: 1, long: 2, type: "land", country: "India" },
  { lat: 1, long: 3, type: "land", country: "India" },
  { lat: 1, long: 4, type: "land", country: "India" },

  { lat: 2, long: 1, type: "ocean", country: "India" },
  { lat: 2, long: 2, type: "land", country: "Bangladesh" },
  { lat: 2, long: 3, type: "land", country: "India" },
  { lat: 2, long: 4, type: "land", country: "India" },

  { lat: 3, long: 1, type: "land", country: "India" },
  { lat: 3, long: 2, type: "land", country: "India" },
  { lat: 3, long: 3, type: "land", country: "India" },
  { lat: 3, long: 4, type: "land", country: "India" },
];

var mapObj = {
  11: {
    lat: 1,
    long: 1,
    type: "land",
    region: "Manipur",
  },
  12: {
    lat: 1,
    long: 2,
    type: "land",
    region: "Manipur",
  },
  13: {
    lat: 1,
    long: 3,
    type: "land",
    region: "Pabna",
  },
  14: {
    lat: 1,
    long: 4,
    type: "land",
    region: "Pabna",
  },
  21: {
    lat: 2,
    long: 1,
    type: "land",
    region: "Kolkata",
  },
  22: {
    lat: 2,
    long: 2,
    type: "land",
    region: "Kolkata",
  },
  23: {
    lat: 2,
    long: 3,
    type: "ocean",
  },
  24: {
    lat: 2,
    long: 4,
    type: "land",
    region: "Dhaka",
  },
  31: {
    lat: 3,
    long: 1,
    type: "land",
    region: "Kolkata",
  },
  32: {
    lat: 3,
    long: 2,
    type: "ocean",
    region: "Kerala",
    localeName: "Kerala",
    localeType: "port",
  },
  33: {
    lat: 3,
    long: 3,
    type: "ocean",
  },
  34: {
    lat: 3,
    long: 4,
    type: "land",
    region: "Dhaka",
  },
};

var regionObj = {
  Pabna: {
    country: "Bangladesh",
    infantry: 20,
    airDefenseArtillery: 2,
    armor: 4,
    fieldArtillery: 8,
    specialForces: 4,
  },
  Dhaka: {
    country: "Bangladesh",
    infantry: 10,
    airDefenseArtillery: 3,
    armor: 0,
    fieldArtillery: 0,
    specialForces: 0,
  },
  Manipur: {
    country: "India",
    infantry: 25,
    airDefenseArtillery: 2,
    armor: 4,
    fieldArtillery: 8,
    specialForces: 4,
  },
  Nagaland: {
    country: "India",
    infantry: 25,
    airDefenseArtillery: 2,
    armor: 4,
    fieldArtillery: 8,
    specialForces: 4,
  },
  Kerala: {
    country: "India",
    infantry: 25,
    airDefenseArtillery: 2,
    armor: 4,
    fieldArtillery: 8,
    specialForces: 4,
  },
  Kolkata: {
    country: "India",
    infantry: 25,
    airDefenseArtillery: 2,
    armor: 4,
    fieldArtillery: 8,
    specialForces: 4,
  },
};

function moveUnits(type, number, from, to) {
  if (regionObj[from][type] >= number) {
    regionObj[from][type] -= number;
    regionObj[to][type] += number;
  }
}

function groundAttack(from, to) {
  let attackerPoints =
    regionObj[from].infantry +
    regionObj[from].fieldArtillery * 2 +
    regionObj[from].specialForces * 3 +
    +regionObj[from].armor * 4;
  let defenderPoints =
    regionObj[to].infantry +
    regionObj[to].fieldArtillery * 2 +
    regionObj[to].specialForces * 3 +
    +regionObj[to].armor * 4;

  if (attackerPoints > defenderPoints) {
    console.log("Bangladesh wins Manipur");

    Object.keys(mapObj).forEach((e) => {
      if (mapObj[e].region === to) {
        // mapObj[e].country = regionObj[from].country;
        regionObj[to].country = regionObj[from].country;
      }
    });
  } else {
    console.log(regionObj[to].country, " wins");
  }
}

function Map() {
  const [showCoordinates, setShowcoordinates] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [choice, setChoice] = useState("");
  //console.log(selectedRegion.length);
  //console.log(regionData[selectedRegion]);

  console.log(choice);

  if (choice === "move10infantryfromdhakatopabna") {
    moveUnits("infantry", 10, "Dhaka", "Pabna");
  }

  if (choice === "groundattackmanipurfrompabna") {
    groundAttack("Pabna", "Manipur");
  }

  return (
    <div className="map_container">
      {/* {mapData.map((block) => (
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
            mapObj={mapObj}
          />
        </div>
      ))} */}

      {Object.keys(mapObj).map((block, i) => (
        <div onClick={() => setSelectedRegion(mapObj[block].region)}>
          <Block
            lat={mapObj[block].lat}
            long={mapObj[block].long}
            type={mapObj[block].type}
            region={mapObj[block].region}
            localeType={mapObj[block].localeType}
            localeName={mapObj[block].localeName}
            showCoordinates={showCoordinates}
            mapObj={mapObj}
            regionObj={regionObj}
          />
        </div>
      ))}

      <div>
        <button onClick={() => setShowcoordinates(!showCoordinates)}>
          Coordinates
        </button>
      </div>
      <div>
        {selectedRegion?.length > 0 && (
          <>
            <div>{selectedRegion}</div>
            <div>Country: {regionObj[selectedRegion].country}</div>
            <div>Infantry: {regionObj[selectedRegion].infantry}</div>
            <div>Armor: {regionObj[selectedRegion].armor}</div>
            <div>Special Forces: {regionObj[selectedRegion].specialForces}</div>
            <div>
              Air Defense Artillery:{" "}
              {regionObj[selectedRegion].airDefenseArtillery}
            </div>
            <div>
              Field Artillery: {regionObj[selectedRegion].fieldArtillery}
            </div>
          </>
        )}
      </div>
      <div>
        <select
          name="cars"
          id="cars"
          onChange={(e) => setChoice(e.target.value)}
        >
          <option>select action</option>
          <option value="groundattackmanipurfrompabna">
            ground attack manipur from pabna
          </option>
          <option value="move10infantryfromdhakatopabna">
            move 10 infantry from dhaka to pabna
          </option>
        </select>
        <button>Do it! (Useless)</button>
      </div>
    </div>
  );
}

export default Map;
