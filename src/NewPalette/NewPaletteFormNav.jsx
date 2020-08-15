import React from "react";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import OpenDrawerIcon from "@material-ui/icons/AddToPhotos";
import { Button } from "@material-ui/core";
import PaletteMetaForm from "./PaletteMetaForm";
import useStyles from "./NewPaletteFormNavStyles";

function NewPaletteFormNav({
  open,
  setOpen,
  savePalette,
  colors,
  palettes,
  drawerWidth,
}) {
  const classes = useStyles({ drawerWidth });
  let history = useHistory();
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  return (
    <div className={classes.root}>
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
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <OpenDrawerIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Create A Palette
          </Typography>
        </Toolbar>
        <div className={classes.navBtns}>
          <Button
            variant="contained"
            onClick={(e) => history.push("/")}
            color="secondary"
          >
            Cancel
          </Button>
          <PaletteMetaForm
            colors={colors}
            savePalette={savePalette}
            palettes={palettes}
          />
        </div>
      </AppBar>
    </div>
  );
}

export default NewPaletteFormNav;
