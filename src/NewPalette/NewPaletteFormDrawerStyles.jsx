import { makeStyles } from "@material-ui/core";

export default ({ drawerWidth }) => {
  return makeStyles(
    (theme) => ({
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      container: {
        width: "90%",
        height: "100%",
        margin: "0 auto",
        "& h4": {
          textAlign: "center",
          marginTop: "1rem",
        },
      },
      buttons: {
        width: "100%",
        display: "inherit",
        flexDirection: "row",
        marginTop: "1rem",
        "& button": {
          fontSize: "0.9rem",
          width: "50%",
        },
      },
    }),
    //Giving name to the generated HTML style tag : for debugging purpose only ;)
    { name: "NewPaletteFormDrawer" }
  )();
};
