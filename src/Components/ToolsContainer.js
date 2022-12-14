import React from "react";
import { themes } from "../constants/themes";
import ChangePageButtons from "./ChangePageButtons";
import "../Styles/toolContainer.css";

const ToolContainer = ({
  onImageSelect,
  selectedImage,
  onLayerSelect,
  selectedLayer,
}) => {
  const [images, setImages] = React.useState(themes.medieval || []);

  const handleSelect = (theme) => {
    setImages(themes[theme]);
  };

  const listaTemas = Object.keys(themes);

  const tool = images?.map((image, index) => (
    <div
      key={`tool_${index}`}
      className="tools"
      style={{
        backgroundImage: image,
        backgroundSize: "contain",
      }}
      onClick={() => onImageSelect(image)}
    />
  ));

  return (
    <div>
      <div className="headerToolContainer">
        <div className="selectedToolContainer">
          <div className="selectedToolTitle">Tool</div>
          <div
            className="selectedTool"
            style={{
              backgroundImage: selectedImage,
              backgroundSize: "contain",
            }}
          />
        </div>
        <div className="selectedToolContainer">
          <div className="selectedToolTitle">Layer</div>
          <div className="selectedLayer">
            <div>
              <form
                onChange={(e) => onLayerSelect(e.target.value)}
                defaultValue={selectedLayer}
                className="form"
              >
                <input
                  className="formInput"
                  type="radio"
                  id="layer1"
                  value="1"
                  name="layer"
                />
                <label className="formInputTitle" for="layer1">
                  Layer 1
                </label>
                <input
                  className="formInput"
                  type="radio"
                  id="layer2"
                  value="2"
                  name="layer"
                />
                <label className="formInputTitle" for="layer2">
                  Layer 2
                </label>
                <input
                  className="formInput"
                  type="radio"
                  id="layer3"
                  value="3"
                  name="layer"
                />
                <label className="formInputTitle" for="layer3">
                  Layer 3
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ChangePageButtons setImages={handleSelect} themes={listaTemas} />
      <div className="toolsContainerDad">
        <div className="toolsContainer">{tool}</div>
      </div>
    </div>
  );
};

export default ToolContainer;
