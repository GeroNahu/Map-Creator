import React from "react";

import "../Styles/commonSelect.css";

import ThemesContext from "../Contexts/ThemesContext";

const CommonSelect = ({ onChange, items }) => {
  console.log(items);
  const { theme } = React.useContext(ThemesContext);
  return (
    <select
      onChange={(e) => {
        onChange(e.target.value);
      }}
      defaultValue={0}
      className="commonSelect"
      id="commonSelect"
      style={{
        backgroundColor: theme.LAYER_SELECTOR_BACKGROUND,
        outline: `solid ${theme.LAYER_SELECTOR_BORDER} 2px`,
        color: theme.TEXT_PRIMARY,
      }}
    >
      {items.map((item, index) => {
        return (
          <option
            className="commonSelectLabels"
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
