import React from "react";

import ThemeContext from "../Contexts/ThemesContext";
import CursorsContext from "../Contexts/CursorsContext";

import "../Styles/toolsCointainer.css";

const ToolsContainer = ({ handleToolChange }) => {
  const { theme } = React.useContext(ThemeContext);
  const { setCursor } = React.useContext(CursorsContext);

  const [buttonClass, setButtonClass] = React.useState("penOn");

  return (
    <section className="toolsContainer">
      <div
        className="buttonsContainer"
        style={{
          backgroundColor: theme.SELECTED_TOOL_BACKGROUND,
          border: `solid ${theme.SELECTED_TOOL_BORDER} 3px`,
        }}
      >
        <div
          className={`backgroundButton ${
            buttonClass === "penOn" ? "backgroundButtonOn" : ""
          }`}
        >
          <button
            className={`toolButton ${
              buttonClass === "penOn" ? "toolButtonOn" : ""
            }`}
            style={{
              backgroundImage: `url(${require(`../Images/Icons/pen.png`)})`,
              backgroundSize: "31px",
              backgroundPosition: "center",
            }}
            onClick={() => {
              handleToolChange("pen");
              setCursor("pen");
              setButtonClass("penOn");
            }}
          />
        </div>
        <div
          className={`backgroundButton ${
            buttonClass === "ereaserOn" ? "backgroundButtonOn" : ""
          }`}
        >
          <button
            className={`toolButton ${
              buttonClass === "ereaserOn" ? "toolButtonOn" : ""
            }`}
            style={{
              backgroundImage: `url(${require(`../Images/Icons/trash can.png`)})`,
              backgroundSize: "32px",
              backgroundPosition: "center",
            }}
            onClick={() => {
              handleToolChange("ereaser");
              setCursor("ereaser");
              setButtonClass("ereaserOn");
            }}
          />
        </div>
        <div
          className={`backgroundButton ${
            buttonClass === "eyedropperOn" ? "backgroundButtonOn" : ""
          }`}
        >
          <button
            className={`toolButton ${
              buttonClass === "eyedropperOn" ? "toolButtonOn" : ""
            }`}
            style={{
              backgroundImage: `url(${require(`../Images/Icons/eyedropper.png`)})`,
              backgroundSize: "30px",
              backgroundPosition: "center",
            }}
            onClick={() => {
              handleToolChange("dropper");
              setCursor("eyedropper");
              setButtonClass("eyedropperOn");
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ToolsContainer;
