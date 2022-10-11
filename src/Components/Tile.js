import React from "react";

const Tile = ({ selected, layerNumber = 1 }) => {
  const [images, setImages] = React.useState({
    layer1: "",
    layer2: "",
    layer3: "",
  });
  const handleClick = () => {
    const updated = { ...images };
    const layer = "layer" + layerNumber;
    updated[layer] = selected;
    console.log(updated);
    setImages(updated);
  };

  return (
    <div className="tile" onClick={handleClick}>
      <div
        className="layer"
        style={{
          backgroundImage: images.layer1,
          backgroundSize: "contain",
        }}
      />
      <div
        className="layer"
        style={{ backgroundImage: images.layer2, backgroundSize: "contain" }}
      />
      <div
        className="layer"
        style={{ backgroundImage: images.layer3, backgroundSize: "contain" }}
      />
    </div>
  );
};

export default Tile;
