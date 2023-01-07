import React from "react";
import "./App.css";
import SectionContainer from "./Components/SectionContainer";
import Header from "./Components/Header";
import { ThemesProvider } from "./Contexts/ThemesContext";
import { CursorsProvider } from "./Contexts/CursorsContext";
import { MapProvider } from "./Contexts/MapContext";
import { LanguageProvider } from "./Contexts/LanguageContext";

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <ThemesProvider>
          <MapProvider>
            <CursorsProvider>
              <Header />
              <SectionContainer />
            </CursorsProvider>
          </MapProvider>
        </ThemesProvider>
      </LanguageProvider>
    </div>
  );
}

export default App;
