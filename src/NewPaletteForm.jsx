import React, { useState } from "react";
import arrayMove from "array-move";
import DraggableColorList from "./DraggableColorList";
import NewPaletteFormNav from "./NewPaletteFormNav";
import NewPaletteFormDrawer from "./NewPaletteFormDrawer";
import useStyles from "./styles/NewPaletteForm";

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
        axis="xy"
        onSortEnd={onDragColorBox}
        drawerHeaderJSSClass={classes.drawerHeader}
      />
    </div>
  );
}

NewPaletteForm.defaultProps = {
  maxColors: 20,
};

export default NewPaletteForm;
