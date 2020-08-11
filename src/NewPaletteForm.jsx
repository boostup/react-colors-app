import React from "react";
import arrayMove from "array-move";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Button } from "@material-ui/core";
import DraggableColorList from "./DraggableColorList";
import NewPaletteFormNav from "./NewPaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    height: "calc(100vh - 64px)",
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function NewPaletteForm({ savePalette, palettes, maxColors }) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  const [colors, setColors] = React.useState(palettes[0].colors);

  const paletteIsFull = colors.length >= maxColors;

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const onRemoveColor = (colorName) => {
    setColors(colors.filter((color) => color.name !== colorName));
  };

  const onDragColorBox = ({ oldIndex, newIndex }) => {
    setColors((colors) => arrayMove(colors, oldIndex, newIndex));
  };

  const clearColors = () => setColors([]);

  const addRandomColor = () => {
    const allColors = palettes.map((p) => p.colors).flat();
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
    <div className={classes.root}>
      <NewPaletteFormNav
        open={open}
        setOpen={setOpen}
        savePalette={savePalette}
        colors={colors}
        palettes={palettes}
        drawerWidth={drawerWidth}
      />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <Typography variant="h4">Design Your Palette</Typography>
        <div>
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
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

        <DraggableColorList
          colors={colors}
          onRemoveColor={onRemoveColor}
          axis="xy"
          onSortEnd={onDragColorBox}
        />
      </main>
    </div>
  );
}

NewPaletteForm.defaultProps = {
  maxColors: 20,
};

export default NewPaletteForm;
