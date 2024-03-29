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
        backgroundColor: theme.LITTLE_SELECTORS_BACKGROUND,
        outline: `solid ${theme.LITTLE_SELECTORS_BORDER} 1px`,
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
