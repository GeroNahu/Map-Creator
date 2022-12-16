import React from "react";
import CategoryButton from "./ChangepageButton";

import "../Styles/changePageButton.css";

const ChangePageButtons = ({ themes, setImages }) => {
  const [selectedCategory, setSelectedCategory] = React.useState("medieval");

  const buttons = themes.map((theme) => (
    <CategoryButton
      buttonLabel={theme}
      setImages={setImages}
      key={`theme_${theme}`}
      setSelectedCategory={setSelectedCategory}
      selectedCategory={theme === selectedCategory}
    />
  ));
  return <div className="categoryTilesButtonsContainer">{buttons}</div>;
};

export default ChangePageButtons;
