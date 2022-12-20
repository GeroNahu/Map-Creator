import React from "react";
import "./App.css";
import SectionContainer from "./Components/SectionContainer";
import Header from "./Components/Header";
import { ThemesProvider } from "./Contexts/ThemesContext";
import { CursorsProvider } from "./Contexts/CursorsContext";

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
