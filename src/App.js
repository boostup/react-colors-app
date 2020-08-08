import React from "react";
import seedPalettes from "./seedPalettes";
import Palette from "./Palette";
import { generatePalette } from "./colorHelpers";
import "./App.css";
import { Route, Switch } from "react-router-dom";

function App() {
  const findPalette = (id) => seedPalettes.find((palette) => palette.id === id);

  return (
    <Switch>
      <Route exact path="/" render={() => <h1>Home</h1>} />
      <Route
        exact
        path="/palette/:id"
        render={(routeProps) => (
          <Palette
            palette={generatePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />
    </Switch>
    // <div className="App">
    //   <Palette palette={generatePalette(seedPalettes[4])} />
    // </div>
  );
}

export default App;
