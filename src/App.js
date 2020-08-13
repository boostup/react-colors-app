import React, { useState } from "react";
import seedPalettes from "./data/seedPalettes";
import { generatePalette } from "./shared/colorHelpers";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette/Palette";
import ShadesPalette from "./Palette/ShadesPalette";
import PaletteList from "./Home/PaletteList";
import NewPaletteForm from "./NewPalette/NewPaletteForm";

function App() {
  const [palettes, setPalettes] = useState(seedPalettes.slice(6));

  const findPalette = (id) => palettes.find((palette) => palette.id === id);

  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette]);
  };

  return (
    <Switch>
      <Route
        exact
        path="/palette/new"
        render={() => (
          <NewPaletteForm savePalette={savePalette} palettes={palettes} />
        )}
      />
      <Route
        exact
        path="/"
        render={(routeProps) => (
          <PaletteList palettes={palettes} {...routeProps} />
        )}
      />
      <Route
        exact
        path="/palette/:id"
        render={(routeProps) => (
          <Palette
            palette={generatePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />
      <Route
        exact
        path="/palette/:paletteId/:colorId"
        render={(routeProps) => (
          <ShadesPalette
            colorId={routeProps.match.params.colorId}
            palette={generatePalette(
              findPalette(routeProps.match.params.paletteId)
            )}
          />
        )}
      />
    </Switch>
  );
}

export default App;
