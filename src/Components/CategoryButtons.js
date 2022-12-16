import React from "react";
import CategoryButton from "./CategoryButton";

import "../Styles/changePageButton.css";

const CategoryButtons = ({ themes, setImages }) => {
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

export default CategoryButtons;
