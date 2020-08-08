import React, { useState } from "react";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import PaletteFooter from "./PaletteFooter";
import "./Palette.css";

function Palette(props) {
  const { colors, paletteName, emoji, id } = props.palette;
  const [level, setLevel] = useState(500);
  const changeLevel = (level) => setLevel(level);
  const [colorFormat, setColorFormat] = useState("hex");
  const changeColorFormat = (value) => setColorFormat(value);

  const colorBoxes = colors[level].map((color, i) => (
    <ColorBox
      key={color.name}
      moreURL={`/palette/${id}/${color.id}`}
      background={color[colorFormat]}
      name={color.name}
      showMoreBtn
    />
  ));

  return (
    <div className="Palette">
      <Navbar
        showLevelSlider
        level={level}
        changeLevel={changeLevel}
        changeColorFormat={changeColorFormat}
      />
      <div className="Palette-colors">{colorBoxes}</div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
}

export default Palette;
