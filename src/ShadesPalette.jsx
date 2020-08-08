import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import PaletteFooter from "./PaletteFooter";
import "./ShadesPalette.css";

function ShadesPalette(props) {
  const { colorId, palette } = props;
  const [colorFormat, setColorFormat] = useState("hex");
  const changeColorFormat = (value) => setColorFormat(value);
  const getShades = () => {
    let shades = [];
    const allColors = palette.colors;
    for (const key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorId)
      );
    }
    return shades.slice(1);
  };
  const colorShades = getShades();
  const colorBoxes = colorShades.map((color) => (
    <ColorBox
      key={color.id}
      name={color.name}
      background={color[colorFormat]}
      showMoreBtn={false}
    />
  ));
  return (
    <div className="ShadesPalette Palette">
      <Navbar changeColorFormat={changeColorFormat} />
      <div className="Palette-colors">
        {colorBoxes}
        <div className="go-back ColorBox">
          <Link to={`/palette/${palette.id}`}>
            <span className="go-back-button">Go Back</span>
          </Link>
        </div>
      </div>
      <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
}

export default ShadesPalette;
