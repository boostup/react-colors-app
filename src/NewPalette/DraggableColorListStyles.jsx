import { makeStyles } from "@material-ui/core";

export default ({ drawerWidth }) => {
  return makeStyles(
    (theme) => ({
      root: {
        height: "calc(100vh - 64px)",
        [theme.breakpoints.down("md")]: {
          height: "calc(100vh - 139px)",
        },
        display: "flex",
        flexWrap: "wrap",
        alignContent: "flex-start",
      },
      content: {
        height: "calc(100vh - 64px)",
        flexGrow: 1,
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
      },
      contentShift: {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
    }),
    //Giving name to the generated HTML style tag : for debugging purpose only ;)
    { name: "DraggableColorList" }
  )();
};
