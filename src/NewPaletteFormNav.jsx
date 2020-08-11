import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Button } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { formatForId } from "./colorHelpers";
import { makeStyles } from "@material-ui/core/styles";

function NewPaletteFormNav({
  open,
  setOpen,
  savePalette,
  colors,
  palettes,
  drawerWidth,
}) {
  const useStyles = makeStyles((theme) => ({
    root: {},
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      flexDirection: "row",
      justifyContent: "space-between",
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
    navBtns: {
      display: "flex",
      "& form": {
        display: "inherit",
        alignItems: "center",
        "& > div": {
          height: "-webkit-fill-available",
        },
      },
    },
  }));

  const classes = useStyles();

  const [newPaletteName, setNewPaletteName] = useState("");

  let history = useHistory();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const onPaletteSave = () => {
    const newPalette = {
      paletteName: newPaletteName,
      id: formatForId(newPaletteName),
      colors: colors,
    };
    savePalette(newPalette);
    history.push("/");
  };

  const onNewPaletteName = (e) => {
    setNewPaletteName(e.target.value);
  };

  ValidatorForm.addValidationRule("isPaletteNameUnique", () =>
    palettes.every(
      ({ paletteName }) =>
        paletteName.toLowerCase() !== newPaletteName.toLowerCase()
    )
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Create A New Palette{" "}
          </Typography>
        </Toolbar>
        <div className={classes.navBtns}>
          <ValidatorForm onSubmit={onPaletteSave}>
            <TextValidator
              value={newPaletteName}
              label="Palette Name"
              onChange={onNewPaletteName}
              validators={["required", "isPaletteNameUnique"]}
              errorMessages={[
                "Enter a palette name",
                "Enter a unique palette name.",
              ]}
            />
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </ValidatorForm>
          <Button onClick={(e) => history.push("/")} color="secondary">
            Cancel
          </Button>
        </div>
      </AppBar>
    </div>
  );
}

export default NewPaletteFormNav;
