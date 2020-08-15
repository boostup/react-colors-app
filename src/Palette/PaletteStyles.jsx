import { makeStyles } from "@material-ui/core";

export default makeStyles(
  (theme) => ({
    Palette: {
      height: "100%",
      width: "100%",
    },
    PaletteColors: {
      display: "flex",
      flexFlow: "wrap",
      alignContent: "flex-start",
      height: "90vh",
      [theme.breakpoints.down("md")]: {
        height: "calc(100vh - 150px)",
      },
    },
  }),
  //Giving name to the generated HTML style tag : for debugging purpose only ;)
  { name: "Palette" }
);
