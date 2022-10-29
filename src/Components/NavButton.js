import React from "react";

import "../Styles/navButton.css";

const NavButton = ({
  visibility,
  setVisibility,
  // showHideClass = "hidden",
  // setShowHideClass,
}) => {
  const toggleMenu = () => setVisibility(!visibility);

  // if (visibility) {
  //   setShowHideClass("shown");
  // } else setShowHideClass("hidden");
  // if (visibility) {
  //   showHideClass = "shown";
  // } else showHideClass = "hidden";
  return (
    <button
      className="navButton"
      onClick={() => {
        return toggleMenu();
      }}
    >
      <span className="hamburguerMenuIcon" />
      <span className="hamburguerMenuIcon" />
      <span className="hamburguerMenuIcon" />
    </button>
  );
};
export default NavButton;
