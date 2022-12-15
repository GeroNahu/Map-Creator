import React from "react";
import "./App.css";
import SectionContainer from "./Components/SectionContainer";
import Header from "./Components/Header";
import { ThemesProvider } from "./constants/ThemesContext";
import { CursorsProvider } from "./constants/CursorsContext";

function App() {
  return (
    <div className="App">
      <ThemesProvider>
        <CursorsProvider>
          <Header />
          <SectionContainer />
        </CursorsProvider>
      </ThemesProvider>
    </div>
  );
}

export default App;
