import React from "react";
import useStyles from "./MiniPaletteStyles";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import PaletteName from "../shared/PaletteName";

function MiniPalette({
  id,
  paletteName,
  emoji,
  colors,
  onPaletteClick,
  onPaletteDelete,
}) {
  const classes = useStyles();
  const miniColorBoxes = colors.map((color) => (
    <div
      key={color.name}
      className={classes.miniColorBox}
      style={{ backgroundColor: color.color }}
    ></div>
  ));

  const onDelete = (e) => {
    e.stopPropagation();
    onPaletteDelete(id);
  };

  return (
    <div className={classes.root} onClick={onPaletteClick}>
      <DeleteIcon className={classes.deleteIcon} onClick={onDelete} />
      <div className={classes.colors}>{miniColorBoxes}</div>
      <PaletteName asTitle name={paletteName} emoji={emoji} />
    </div>
  );
}

export default MiniPalette;
