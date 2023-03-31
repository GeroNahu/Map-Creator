import React from "react";

import cursors from "../constants/AppCursors";

const CursorsContext = React.createContext();

const CursorsProvider = ({ children }) => {
  const [cursor, setCursor] = React.useState(cursors.pen);

  const handleCursor = (cursorName) => {
    setCursor(cursors[cursorName]);
  };

  const data = { cursor, setCursor: handleCursor };

  return (
    <CursorsContext.Provider value={data}>{children}</CursorsContext.Provider>
  );
};

export { CursorsProvider };

export default CursorsContext;
