import React, { useState } from "react";
import arrayMove from "array-move";
import DraggableColorList from "./DraggableColorList";
import NewPaletteFormNav from "./NewPaletteFormNav";
import NewPaletteFormDrawer from "./NewPaletteFormDrawer";
import useStyles from "./NewPaletteFormStyles";

const drawerWidth = 400;

function NewPaletteForm({ savePalette, palettes, maxColors }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [colors, setColors] = useState(palettes[0].colors);
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
        palettes={palettes}
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
