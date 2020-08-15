import { makeStyles } from "@material-ui/core";

export default makeStyles(
  () => ({
    PaletteName: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      color: "black",
      fontSize: "1rem",
      position: "relative",
      fontWeight: "normal",
      margin: "0 1rem",
      height: " 4vh",
      "&.asTitle": {
        paddingTop: "0.5rem",
        justifyContent: "space-between",
        margin: "0",
      },
    },
    name: {
      margin: "0 0.5rem",
    },
    emoji: {
      fontSize: "1.5rem",
    },
  }),
  //Giving name to the generated HTML style tag : for debugging purpose only ;)
  { name: "PaletteName" }
);
