import React, { useState } from "react";
import { withStyles } from "@material-ui/styles";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import PaletteFooter from "./PaletteFooter";
import styles from "./styles/Palette";

function Palette(props) {
  const { classes } = props;
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
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
}

export default withStyles(styles)(Palette);
