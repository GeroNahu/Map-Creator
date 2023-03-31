import React from "react";

import ThemeContext from "../Contexts/ThemesContext";
import CursorsContext from "../Contexts/CursorsContext";

import "../Styles/toolsCointainer.css";

const ToolsContainer = ({ handleToolChange, toolsList, selectedTool }) => {
  const { theme } = React.useContext(ThemeContext);
  const { setCursor } = React.useContext(CursorsContext);
  const renderButtons = () => {
    return toolsList.map((tool, index) => {
      return (
        <div
          className={`backgroundButton ${
            selectedTool === tool ? "backgroundButtonOn" : ""
          }`}
          key={`tool_${tool}_${index}`}
        >
          <button
            className={`toolButton ${
              selectedTool === tool ? "toolButtonOn" : ""
            }`}
            style={{
              backgroundImage: `url(${require(`../Images/Icons/${tool}.png`)})`,
              backgroundSize: "30px",
              backgroundPosition: "center",
            }}
            onClick={() => {
              handleToolChange(tool);
              setCursor(tool);
            }}
          />
        </div>
      );
    });
  };
  return (
    <section className="toolsContainer">
      <div
        className="buttonsContainer"
        style={{
          backgroundColor: theme.SELECTED_TOOL_BACKGROUND,
          border: `solid ${theme.SELECTED_TOOL_BORDER} 3px`,
        }}
      >
        {renderButtons()}
      </div>
    </section>
  );
};

export default ToolsContainer;
