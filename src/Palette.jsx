import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Palette.css";
import ColorBox from "./ColorBox";

function Palette(props) {
  const [level, setLevel] = useState(500);
  const [colorFormat, setColorFormat] = useState("hex");
  const changeLevel = (level) => setLevel(level);
  const changeColorFormat = (value) => setColorFormat(value);
  const { colors, paletteName, emoji } = props.palette;

  const colorBoxes = colors[level].map((color, i) => (
    <ColorBox
      key={color.name}
      background={color[colorFormat]}
      name={color.name}
    />
  ));

  return (
    <div className="Palette">
      <Navbar
        level={level}
        changeLevel={changeLevel}
        changeColorFormat={changeColorFormat}
      />
      <div className="Palette-colors">{colorBoxes}</div>
      <footer className="Palette-footer">
        {paletteName} {emoji}
      </footer>
    </div>
  );
}

export default Palette;
