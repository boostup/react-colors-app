import React, { useState } from "react";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Button } from "@material-ui/core";
import useStyles from "./ColorPickerFormStyles";

function ColorPickerForm({ colors, setColors, isColorUnique, paletteIsFull }) {
  const classes = useStyles();
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
      <ValidatorForm
        onSubmit={addNewColor}
        className={classes.form}
        instantValidate={false}
      >
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

export default ColorPickerForm;
