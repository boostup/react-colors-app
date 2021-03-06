import React, { useState } from "react";
import seedPalettes from "../data/seedPalettes";
import arrayMove from "array-move";
import DraggableColorList from "./DraggableColorList";
import NewPaletteFormNav from "./NewPaletteFormNav";
import NewPaletteFormDrawer from "./NewPaletteFormDrawer";
import useStyles from "./NewPaletteFormStyles";

const drawerWidth = 320;

function NewPaletteForm({ savePalette, palettes, maxColors }) {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [colors, setColors] = useState(seedPalettes[0].colors);
  const onDragColorBox = ({ oldIndex, newIndex }) => {
    setColors((colors) => arrayMove(colors, oldIndex, newIndex));
  };

  return (
    <div className={classes.root}>
      <NewPaletteFormNav
        open={open}
        setOpen={setOpen}
        savePalette={savePalette}
        colors={colors}
        palettes={palettes}
        drawerWidth={drawerWidth}
      />
      <NewPaletteFormDrawer
        colors={colors}
        setColors={setColors}
        maxColors={maxColors}
        open={open}
        setOpen={setOpen}
        drawerWidth={drawerWidth}
        drawerHeaderJSSClass={classes.drawerHeader}
      />

      <DraggableColorList
        open={open}
        colors={colors}
        setColors={setColors}
        drawerWidth={drawerWidth}
        drawerHeaderJSSClass={classes.drawerHeader}
        axis="xy"
        onSortEnd={onDragColorBox}
        distance={20}
      />
    </div>
  );
}

NewPaletteForm.defaultProps = {
  maxColors: 20,
};

export default NewPaletteForm;
