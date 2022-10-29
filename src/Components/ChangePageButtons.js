import React from "react";
import ChangePageButton from "./ChangePageButton";

import "../Styles/changePageButton.css";

const ChangePageButtons = ({ themes, setImages }) => {
  const buttons = themes.map((theme) => (
    <ChangePageButton
      buttonLabel={theme}
      setImages={() => setImages(theme)}
      key={`theme_${theme}`}
    />
  ));
  return <div className="themeButtons">{buttons}</div>;
};

export default ChangePageButtons;
