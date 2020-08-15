import { makeStyles } from "@material-ui/core";

export default makeStyles(
  () => ({
    Palette: {
      height: "100%",
      width: "100%",
    },
    PaletteColors: {
      display: "flex",
      flexFlow: "wrap",
      alignContent: "flex-start",
      height: "90vh",
    },
  }),
  //Giving name to the generated HTML style tag : for debugging purpose only ;)
  { name: "Palette" }
);
