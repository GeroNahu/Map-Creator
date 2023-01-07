import React from "react";

import "../Styles/littleSelect.css";

import ThemesContext from "../Contexts/ThemesContext";

const LittleSelect = ({ onChange, items }) => {
  const { theme } = React.useContext(ThemesContext);

  return (
    <select
      onChange={(e) => {
        onChange(e.target.value);
      }}
      defaultValue={0}
      className="littleSelect"
      id="littleSelect"
      style={{
        backgroundColor: theme.LAYER_SELECTOR_BACKGROUND,
        outline: `solid ${theme.LAYER_SELECTOR_BORDER} 2px`,
        color: theme.TEXT_PRIMARY,
      }}
    >
      {items.map((item, index) => {
        return (
          <option
            className="littleSelectLabals"
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

export default LittleSelect;
