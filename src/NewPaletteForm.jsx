import React from "react";
import arrayMove from "array-move";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { ChromePicker } from "react-color";
import { Button } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import DraggableColorList from "./DraggableColorList";
import NewPaletteFormNav from "./NewPaletteFormNav";

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
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

export default function NewPaletteForm({ savePalette, palettes, maxColors }) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);
  const [currentColor, setCurrentColor] = React.useState("salmon");
  const [newColorName, setNewColorName] = React.useState("");
  const [colors, setColors] = React.useState(palettes[0].colors);

  const paletteIsFull = colors.length >= maxColors;

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addNewColor = () => {
    setColors([...colors, { color: currentColor, name: newColorName }]);
    setNewColorName("");
  };

  const onNewColorName = (e) => {
    setNewColorName(e.target.value);
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

  ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
    isColorUnique(value)
  );

  ValidatorForm.addValidationRule("isColorUnique", () =>
    colors.every(({ color }) => color !== currentColor)
  );

  return (
    <div className={classes.root}>
      <NewPaletteFormNav
        open={open}
        setOpen={setOpen}
        classes={classes}
        savePalette={savePalette}
        colors={colors}
        palettes={palettes}
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
        <ChromePicker
          color={currentColor}
          onChangeComplete={(newColor) => setCurrentColor(newColor.hex)}
        />
        <ValidatorForm onSubmit={addNewColor}>
          <TextValidator
            value={newColorName}
            onChange={onNewColorName}
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "Enter a color name.",
              "Enter a unique color name.",
              "Enter a unique color.",
            ]}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={
              paletteIsFull
                ? {}
                : {
                    backgroundColor: currentColor,
                  }
            }
            disabled={paletteIsFull}
          >
            {paletteIsFull ? "Palette full" : "Add Color"}
          </Button>
        </ValidatorForm>
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