import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import PaletteName from "../shared/PaletteName";
import usePaletteStyles from "./PaletteStyles";
import useShadesPaletteStyles from "./ShadesPaletteStyles";

function ShadesPalette({ colorId, palette }) {
  const paletteClasses = usePaletteStyles();
  const classes = useShadesPaletteStyles();
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
      key={color.name}
      name={color.name}
      background={color[colorFormat]}
      showMoreBtn={false}
      doubleHeight
    />
  ));
  return (
    <div className={paletteClasses.Palette}>
      <Navbar changeColorFormat={changeColorFormat} />
      <div className={paletteClasses.PaletteColors}>
        {colorBoxes}
        <div className={classes.goBackContainer}>
          <Link to={`/palette/${palette.id}`}>
            <span className={classes.goBackButton}>Go Back</span>
          </Link>
        </div>
      </div>
      <PaletteName name={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
}

export default ShadesPalette;
