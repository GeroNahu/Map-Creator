import React from "react";
import ThemesContext from "../Contexts/ThemesContext";

import "../Styles/globalStyles.css";
import "../Styles/HandleTheme.css";

const HandleTheme = () => {
  const { theme, setTheme } = React.useContext(ThemesContext);
  const [onOff, setOnOff] = React.useState(false);

  return (
    <div
      className="toggle"
      onClick={() => {
        setOnOff(!onOff);
        setTheme(onOff ? "light" : "dark");
      }}
      style={{
        display: theme.SHOWN_HIDDEN_HANDLE_THEME,
        backgroundColor: theme.TOOGLE_CONTAINER_BACKGROUND,
        border: `solid ${theme.TOOGLE_CONTAINER_BORDER} 3px`,
      }}
    >
      <div
        className={`toggleBar ${onOff ? "on" : ""}`}
        style={{ backgroundColor: theme.TOOGLE_BAR_BACKGROUND }}
      >
        <div
          className={`toggleCircle ${onOff ? "on" : ""}`}
          style={{ backgroundColor: theme.TOOGLE_CIRCLE_BACKGROUND }}
        />
      </div>
      <h5 className="h5" style={{ color: theme.TEXT_PRIMARY }}>
        Nocturne Mode
      </h5>
    </div>
  );
};

export default HandleTheme;
