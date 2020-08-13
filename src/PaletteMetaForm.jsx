import React, { useState } from "react";
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
import { Picker as EmojiPicker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import { withStyles } from "@material-ui/styles";

function FormDialog({ classes, savePalette, colors, palettes }) {
  const [newPaletteName, setNewPaletteName] = useState("");
  const [step, setStep] = useState("none");

  let history = useHistory();

  const handleClickOpen = () => {
    setStep("paletteName");
  };

  const handleClose = () => {
    setStep("none");
    setNewPaletteName("");
  };

  const showEmojiPicker = () => {
    setStep("emoji");
  };

  const onPaletteSave = (emoji) => {
    const newPalette = {
      paletteName: newPaletteName,
      id: formatForId(newPaletteName),
      colors,
      emoji: emoji.native,
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
        open={step === "emoji"}
        className={classes.root}
        onClose={handleClose}
      >
        <DialogTitle id="form-dialog-title">
          Pick an Emoji for your Palette
        </DialogTitle>
        <EmojiPicker autoFocus onSelect={onPaletteSave} native />
      </Dialog>
      <Dialog
        open={step === "paletteName"}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        TransitionComponent={Zoom}
      >
        <DialogTitle id="form-dialog-title">Name your palette</DialogTitle>
        <ValidatorForm onSubmit={showEmojiPicker}>
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

const styles = {
  root: {
    "& .emoji-mart .emoji-mart-emoji:focus": {
      outline: "none",
    },
  },
};

export default withStyles(styles)(FormDialog);
