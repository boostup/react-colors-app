import React, { useState } from "react";
import { ChromePicker } from "react-color";
import { Button } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

function ColorPickerForm({ colors, setColors, isColorUnique, paletteIsFull }) {
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
    </>
  );
}

export default ColorPickerForm;
