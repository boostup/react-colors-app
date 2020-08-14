import React, { memo } from "react";
import useStyles from "./MiniPaletteStyles";
import DeleteIcon from "@material-ui/icons/Delete";
import PaletteName from "../shared/PaletteName";

function MiniPalette({
  id,
  paletteName,
  emoji,
  colors,
  onPaletteClick,
  openDialog,
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
    openDialog(id);
  };

  return (
    <div className={classes.root} onClick={() => onPaletteClick(id)}>
      <DeleteIcon className={classes.deleteIcon} onClick={onDelete} />
      <div className={classes.colors}>{miniColorBoxes}</div>
      <PaletteName asTitle name={paletteName} emoji={emoji} />
    </div>
  );
}

export default memo(MiniPalette, (prevProps, nextProps) => {
  // console.log(
  //   prevProps,
  //   nextProps,
  //   prevProps.onPaletteClick === nextProps.onPaletteClick,
  //   prevProps.openDialog === nextProps.openDialog
  // );
  return (
    prevProps.onPaletteClick === nextProps.onPaletteClick &&
    prevProps.openDialog === nextProps.openDialog
  );
});
