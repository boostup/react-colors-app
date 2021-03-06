import React from "react";
import seedPalettes from "../data/seedPalettes";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Button } from "@material-ui/core";
import ColorPickerForm from "./ColorPickerForm";
import useStyles from "./NewPaletteFormDrawerStyles";

function NewPaletteFormDrawer({
  colors,
  setColors,
  maxColors,
  open,
  setOpen,
  drawerWidth,
  drawerHeaderJSSClass,
}) {
  const classes = useStyles({ drawerWidth });
  const paletteIsFull = colors.length >= maxColors;
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const clearColors = () => setColors([]);

  const addRandomColor = () => {
    const allColors = seedPalettes.map((p) => p.colors).flat();
    var rand = Math.floor(Math.random() * allColors.length);
    const randColor = allColors[rand];
    if (!isColorUnique(randColor.name)) return addRandomColor();
    setColors([...colors, randColor]);
  };

  function isColorUnique(colorName) {
    return colors.every(
      ({ name }) => name.toLowerCase() !== colorName.toLowerCase()
    );
  }

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={drawerHeaderJSSClass}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <div className={classes.container}>
        <div className={classes.buttons}>
          <Button variant="contained" color="secondary" onClick={clearColors}>
            Clear Palette
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={addRandomColor}
            disabled={paletteIsFull}
          >
            Random Color
          </Button>
        </div>
        <ColorPickerForm
          paletteIsFull={paletteIsFull}
          isColorUnique={isColorUnique}
          setColors={setColors}
          colors={colors}
        />
      </div>
    </Drawer>
  );
}

export default NewPaletteFormDrawer;
