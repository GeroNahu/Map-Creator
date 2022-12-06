import React from "react";

import { tilesThemes } from "../constants/tilesThemes";
import ChangePageButtons from "./ChangePageButtons";
import NavButton from "./NavButton";
import Drawer from "./Drawer";
import ThemeContext from "../constants/ThemesContext";

import "../Styles/toolContainer.css";
import "../Styles/globalStyles.css";

const platform = navigator.userAgentData.platform;

const TilesContainer = ({
  onImageSelect,
  selectedImage,
  onLayerSelect,
  selectedLayer,
}) => {
  const ref = React.useRef(null);

  const [images, setImages] = React.useState(tilesThemes.medieval || []);
  const [visibility, setVisibility] = React.useState(false);
  const [drawerPosition, setDrawerPosition] = React.useState(0);
  const { theme } = React.useContext(ThemeContext);

  const divTilesContainerWidth = ref.current?.clientWidth;
  const [transition, setTransition] = React.useState(true);

  const [tileImage, setTileImage] = React.useState("");

  const handleSelect = (theme) => {
    setImages(tilesThemes[theme]);
  };

  const listaTemas = Object.keys(tilesThemes);

  const tool = images?.map((image, index) => (
    <div
      key={`tool_${index}`}
      className="tiles"
      style={{
        backgroundImage: image,
        backgroundSize: "cover",
        backgroundPosition: "center",
        outline: `solid ${theme.TOOLS_GRID_COLOR} 1px`,
      }}
      onClick={() => onImageSelect(image)}
    />
  ));

  let showHideClass;
  if (visibility) {
    showHideClass = "shown";
  } else showHideClass = "hidden";

  const transitionPosition = `calc(100% - ${drawerPosition}px)`;

  return (
    <section
      className={`divTilesContainer  ${showHideClass}`}
      id="divTilesContainer"
      ref={ref}
      style={{
        backgroundColor: theme.TOOLS_SECTION_BACKGROUND,
        border: `solid ${theme.TOOLS_SECTION_BORDER} 3px`,
        left: platform === "Android" ? transitionPosition : `${null}`,
        transition: transition ? "400ms linear" : "none",
      }}
    >
      <NavButton
        platform={platform}
        visibility={visibility}
        setVisibility={setVisibility}
      />
      <Drawer
        drawerPosition={drawerPosition}
        setDrawerPosition={setDrawerPosition}
        platform={platform}
        divTilesContainerWidth={divTilesContainerWidth}
        transition={transition}
        setTransition={setTransition}
      />
      <div className="headerToolContainer">
        <div className="selectedToolContainer">
          <h2 className="h2" style={{ color: theme.TITLES }}>
            Tiles
          </h2>
          <div
            className="selectedTool"
            style={{
              backgroundColor: theme.SELECTED_TOOL_BACKGROUND,
              backgroundImage: selectedImage,
              backgroundSize: "contain",
              border: `solid ${theme.SELECTED_TOOL_BORDER} 3px`,
            }}
          />
        </div>
        <div className="selectedLayerContainer">
          <h2 className="h2" style={{ color: theme.TITLES }}>
            Layer
          </h2>
          <div>
            <form
              onChange={(e) => onLayerSelect(e.target.value)}
              defaultValue={selectedLayer}
              className="form"
              style={{
                backgroundColor: theme.LAYER_SELECTOR_BACKGROUND,
                border: `solid ${theme.LAYER_SELECTOR_BORDER} 3px`,
              }}
            >
              <input
                className="formInput"
                type="radio"
                id="layer1"
                value="0"
                name="layer"
              />
              <label
                className="formInputTitle"
                htmlFor="layer1"
                style={{ color: theme.TEXT_PRIMARY }}
              >
                Layer 1
              </label>
              <input
                className="formInput"
                type="radio"
                id="layer2"
                value="1"
                name="layer"
              />
              <label
                className="formInputTitle"
                htmlFor="layer2"
                style={{ color: theme.TEXT_PRIMARY }}
              >
                Layer 2
              </label>
              <input
                className="formInput"
                type="radio"
                id="layer3"
                value="2"
                name="layer"
              />
              <label
                className="formInputTitle"
                htmlFor="layer3"
                style={{ color: theme.TEXT_PRIMARY }}
              >
                Layer 3
              </label>
            </form>
          </div>
        </div>
      </div>
      <div className="buttosAndTiles">
        <ChangePageButtons setImages={handleSelect} themes={listaTemas} />
        <div
          className="tilesContainerDad"
          style={{
            backgroundColor: theme.TOOLS_CONTAINER_BACKGROUND,
            border: `solid ${theme.TOOLS_CONTAINER_BORDER} 3px`,
          }}
        >
          <div className="tilesContainer">{tool}</div>
        </div>
      </div>
    </section>
  );
};

export default TilesContainer;
