import React from "react";
import "./App.css";
import SectionContainer from "./Components/SectionContainer";
import Header from "./Components/Header";
import { ThemesProvider } from "./constants/ThemesContext";

function App() {
  return (
    <div className="App">
      <ThemesProvider>
        <Header />
        <SectionContainer />
      </ThemesProvider>
    </div>
  );
}

export default App;
