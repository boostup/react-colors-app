import React from "react";
import seedPalettes from "./seedPalettes";
import Palette from "./Palette";
import { generatePalette } from "./colorHelpers";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Palette palette={generatePalette(seedPalettes[4])} />
    </div>
  );
}

export default App;
