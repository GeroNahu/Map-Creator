import React from "react";
import ChangePageButton from "./ChangePageButton";

const ChangePageButtons = ({ themes, setImages }) => {
  const buttons = themes.map((theme) => (
    <ChangePageButton
      buttonLabel={theme}
      setImages={() => setImages(theme)}
      key={`theme_${theme}`}
    />
  ));
  return <div>{buttons}</div>;
};

export default ChangePageButtons;
