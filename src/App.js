import React from "react";
import "./App.css";
import SectionContainer from "./Components/SectionContainer";
import Header from "./Components/Header";
import { ThemesProvider } from "./Contexts/ThemesContext";
import { CursorsProvider } from "./Contexts/CursorsContext";
import { MapProvider } from "./Contexts/MapContext";

function App() {
  return (
    <div className="App">
      <ThemesProvider>
        <CursorsProvider>
          <MapProvider>
            <Header />
          </MapProvider>
          <SectionContainer />
        </CursorsProvider>
      </ThemesProvider>
    </div>
  );
}

export default App;
