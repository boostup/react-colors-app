import React from "react";
import useStyles from "./MiniPaletteStyles";
import PaletteName from "../shared/PaletteName";

function MiniPalette({ paletteName, emoji, colors, onPaletteClick }) {
  const classes = useStyles();
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

export default MiniPalette;
