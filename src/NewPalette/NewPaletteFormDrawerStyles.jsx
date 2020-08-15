import { makeStyles } from "@material-ui/core";

export default ({ drawerWidth }) => {
  return makeStyles(
    (theme) => ({
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
        height: "100vh",
      },
      drawerPaper: {
        width: drawerWidth,
      },
      container: {
        width: "90%",
        height: "100%",
        margin: "0 auto",
      },
      buttons: {
        padding: "1rem 0",
        width: "100%",
      },
    }),
    //Giving name to the generated HTML style tag : for debugging purpose only ;)
    { name: "NewPaletteFormDrawer" }
  )();
};
