import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Palette.css";
import ColorBox from "./ColorBox";

function Palette(props) {
  const [level, setLevel] = useState(500);
  const [colorFormat, setColorFormat] = useState("hex");
  const colorBoxes = props.palette.colors[level].map((color, i) => (
    <ColorBox
      key={`${color.hex} - ${i}`}
      background={color[colorFormat]}
      name={color.name}
    />
  ));

  function changeLevel(level) {
    setLevel(level);
  }

  function changeColorFormat(value) {
    setColorFormat(value);
  }

  return (
    <div className="Palette">
      <Navbar
        level={level}
        changeLevel={changeLevel}
        changeColorFormat={changeColorFormat}
      />
      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  );
}

export default Palette;
