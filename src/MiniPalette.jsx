import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/MiniPalette";
import PaletteName from "./PaletteName";

function MiniPalette(props) {
  const { paletteName, emoji, classes, colors, onPaletteClick } = props;
  const miniColorBoxes = colors.map((color) => (
    <div
      key={color.name}
      className={classes.miniColorBox}
      style={{ backgroundColor: color.color }}
    ></div>
  ));

  return (
    <div className={classes.root} onClick={onPaletteClick}>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <PaletteName asTitle name={paletteName} emoji={emoji} />
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
