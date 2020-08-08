import React from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";

function PaletteList(props) {
  const { palettes } = props;
  return (
    <div>
      <MiniPalette />
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
