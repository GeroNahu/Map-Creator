import React from "react";

import "../Styles/navButton.css";

const NavButton = ({ visibility, setVisibility, platform }) => {
  const toggleMenu = () => setVisibility(!visibility);

  return (
    <button
      className="navButton"
      onClick={() => {
        return toggleMenu();
      }}
      style={{
        display: platform === "Windows" ? "fixed" : "none",
      }}
    >
      <span className="hamburguerMenuIcon" />
      <span className="hamburguerMenuIcon" />
      <span className="hamburguerMenuIcon" />
    </button>
  );
};
export default NavButton;
