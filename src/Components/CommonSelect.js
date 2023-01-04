import React from "react";

import "../Styles/toolsSection.css";

import ThemesContext from "../Contexts/ThemesContext";

const CommonSelect = ({ onChange, items }) => {
  const { theme } = React.useContext(ThemesContext);
  return (
    <select
      onChange={(e) => {
        onChange(e.target.value);
      }}
      defaultValue={0}
      className="form"
      id="form"
      style={{
        backgroundColor: theme.LAYER_SELECTOR_BACKGROUND,
        outline: `solid ${theme.LAYER_SELECTOR_BORDER} 2px`,
        color: theme.TEXT_PRIMARY,
      }}
    >
      {items.map((item, index) => {
        return (
          <option
            className="formInputTitle"
            key={`option_${item.value}_${index}`}
            value={item.value}
            style={{ color: theme.TEXT_PRIMARY }}
          >
            {item.label}
          </option>
        );
      })}
      ;
    </select>
  );
};

export default CommonSelect;
