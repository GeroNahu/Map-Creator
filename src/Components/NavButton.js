import React from "react";

import "../Styles/navButton.css";

const NavButton = ({ visibility, setVisibility }) => {
  const toggleMenu = () => setVisibility(!visibility);

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
