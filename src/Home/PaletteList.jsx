import React from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import useStyles from "./PaletteListStyles";

function PaletteList({ palettes, history }) {
  const classes = useStyles();
  const goToPalette = (id) => history.push(`/palette/${id}`);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Colors</h1>
          <Link to="/palette/new">Create Palette</Link>
        </nav>
        <div className={classes.palettes}>
          {palettes.map((palette) => (
            <MiniPalette
              key={palette.id}
              {...palette}
              onPaletteClick={() => goToPalette(palette.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PaletteList;
