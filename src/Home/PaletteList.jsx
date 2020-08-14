import React, { useState, useCallback } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import MiniPalette from "./MiniPalette";
import useStyles from "./PaletteListStyles";
import useToggleState from "../shared/useToggleState";
import { Button } from "@material-ui/core";

function PaletteList({ palettes, history, onPaletteDelete }) {
  const classes = useStyles();
  const [idToDelete, setIdToDelete] = useState("");
  const [openDeleteDialogToggle, setOpenDeleteDialogToggle] = useToggleState(
    false
  );
  const goToPalette = useCallback((id) => history.push(`/palette/${id}`), [
    history,
  ]);

  const onDialogOpen = useCallback(
    (id) => {
      setOpenDeleteDialogToggle(true);
      setIdToDelete(id);
    },
    // eslint-disable-next-line
    [setIdToDelete]
  );

  const onDialogDeleteClicked = () => {
    onPaletteDelete(idToDelete);
    setOpenDeleteDialogToggle(false);
  };

  const onDialogCancelClicked = () => {
    setOpenDeleteDialogToggle(false);
    setIdToDelete("");
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1 className={classes.heading}>React Colors</h1>
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push("/palette/new")}
          >
            Create Palette
          </Button>
        </nav>
        <TransitionGroup className={classes.palettes}>
          {palettes.map((palette) => (
            <CSSTransition key={palette.id} classNames="fade" timeout={500}>
              <MiniPalette
                id={palette.id}
                {...palette}
                onPaletteClick={goToPalette}
                openDialog={onDialogOpen}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
      <Dialog open={openDeleteDialogToggle} onClose={onDialogCancelClicked}>
        <DialogTitle>Delete this palette ?</DialogTitle>
        <List>
          <ListItem button onClick={onDialogDeleteClicked}>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
                <CheckIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Delete" />
          </ListItem>
          <ListItem button onClick={onDialogCancelClicked}>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                <CloseIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Cancel" />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}

export default PaletteList;
