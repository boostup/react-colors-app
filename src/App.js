import React from "react";
import seedPalettes from "./seedPalettes";
import Palette from "./Palette";
import { generatePalette } from "./colorHelpers";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import PaletteList from "./PaletteList";
import ShadesPalette from "./ShadesPalette";

function App() {
  const findPalette = (id) => seedPalettes.find((palette) => palette.id === id);

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(routeProps) => (
          <PaletteList palettes={seedPalettes} {...routeProps} />
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
