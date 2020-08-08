import React from "react";
import { Link } from "react-router-dom";

function PaletteList(props) {
  const { palettes } = props;

  return (
    <div>
      <h1>React Color Palettes</h1>
      {palettes.map((palette) => (
        <p>
          <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
        </p>
      ))}
    </div>
  );
}

export default PaletteList;
