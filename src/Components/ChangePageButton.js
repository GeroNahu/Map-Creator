import React from "react";
import "../Styles/changePageButton.css";

const ChangePageButton = ({ buttonLabel, setImages }) => {
  return (
    <button className="changePageButton" onClick={setImages}>
      {buttonLabel}
    </button>
  );
};

export default ChangePageButton;
