import React, { useState, forwardRef } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { formatForId } from "./colorHelpers";
import { Zoom } from "@material-ui/core";

export default function FormDialog({ savePalette, colors, palettes }) {
  const [newPaletteName, setNewPaletteName] = useState("");
  const [open, setOpen] = useState(false);

  let history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
    <>
      <Button color="primary" onClick={handleClickOpen}>
        Save
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        TransitionComponent={Zoom}
      >
        <DialogTitle id="form-dialog-title">Name your palette</DialogTitle>
        <ValidatorForm onSubmit={onPaletteSave}>
          <DialogContent>
            <DialogContentText>
              Please enter a name for your new palette. Note it must be unique.
            </DialogContentText>
            <TextValidator
              fullWidth
              autoFocus
              value={newPaletteName}
              label="Palette Name"
              onChange={onNewPaletteName}
              validators={["required", "isPaletteNameUnique"]}
              errorMessages={[
                "Enter a palette name",
                "Enter a unique palette name.",
              ]}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </>
  );
}
