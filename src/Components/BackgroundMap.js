import React from "react";

import Tile from "./Tile";

import "../Styles/backgroundMap.css";

const BackgroundMap = ({ selected, layer }) => {
  const tilesFor = [];
  for (let i = 0; i < 9; i++) {
    tilesFor.push(<Tile selected={selected} layerNumber={layer} />);
  }
  console.log(tilesFor);
  return <div className="backgroundMap">{tilesFor}</div>;
};

export default BackgroundMap;
