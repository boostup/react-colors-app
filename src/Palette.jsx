import React, { useState } from "react";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import PaletteName from "./PaletteName";
import useStyles from "./styles/Palette";

function Palette(props) {
  const classes = useStyles();
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
    <div className={classes.Palette}>
      <Navbar
        showLevelSlider
        level={level}
        changeLevel={changeLevel}
        changeColorFormat={changeColorFormat}
      />
      <div className={classes.PaletteColors}>{colorBoxes}</div>
      <PaletteName name={paletteName} emoji={emoji} />
    </div>
  );
}

export default Palette;
