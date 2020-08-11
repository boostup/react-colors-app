import React, { useState } from "react";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

function ColorPickerForm({
  classes,
  colors,
  setColors,
  isColorUnique,
  paletteIsFull,
}) {
  const [currentColor, setCurrentColor] = useState("salmon");
  const [newColorName, setNewColorName] = useState("");
  const addNewColor = () => {
    setColors([...colors, { color: currentColor, name: newColorName }]);
    setNewColorName("");
  };

  const onNewColorName = (e) => setNewColorName(e.target.value);

  ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
    isColorUnique(value)
  );

  ValidatorForm.addValidationRule("isColorUnique", () =>
    colors.every(({ color }) => color !== currentColor)
  );

  return (
    <>
      <ChromePicker
        className={classes.colorPicker}
        color={currentColor}
        onChangeComplete={(newColor) => setCurrentColor(newColor.hex)}
      />
      <ValidatorForm onSubmit={addNewColor} className={classes.form}>
        <TextValidator
          value={newColorName}
          onChange={onNewColorName}
          validators={["required", "isColorNameUnique", "isColorUnique"]}
          errorMessages={[
            "Enter a color name.",
            "Enter a unique color name.",
            "Enter a unique color.",
          ]}
          placeholder="Color Name"
          variant="filled"
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
          className={classes.addColorBtn}
        >
          {paletteIsFull ? "Palette full" : "Add Color"}
        </Button>
      </ValidatorForm>
    </>
  );
}

const styles = {
  form: {
    width: "100%",
    "& .MuiTextField-root": {
      width: "100%",
      marginTop: "1rem",
    },
  },
  colorPicker: {
    width: "100% !important",
    marginTop: "1.5rem",
  },
  addColorBtn: {
    width: "100%",
    padding: "1rem",
    marginTop: "2rem",
    fontSize: "2rem",
  },
};

export default withStyles(styles)(ColorPickerForm);
