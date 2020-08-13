import { makeStyles } from "@material-ui/core";

export default ({ drawerWidth }) => {
  return makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
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
  }))();
};
