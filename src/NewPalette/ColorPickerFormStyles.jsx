import { makeStyles } from "@material-ui/core";

export default makeStyles(
  () => ({
    form: {
      width: "100%",
      "& .MuiTextField-root": {
        width: "100%",
      },
    },
    colorPicker: {
      width: "100% !important",
    },
    addColorBtn: {
      width: "100%",
      padding: "1rem",
      marginTop: "1rem",
      fontSize: "2rem",
    },
  }),
  //Giving name to the generated HTML style tag : for debugging purpose only ;)
  { name: "ColorPickerForm" }
);
