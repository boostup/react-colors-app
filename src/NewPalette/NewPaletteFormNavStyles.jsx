import { makeStyles } from "@material-ui/core";

export default ({ drawerWidth }) => {
  return makeStyles(
    (theme) => ({
      root: {
        "& .MuiToolbar-gutters": {
          padding: 0,
          "& .MuiTypography-h6": {
            fontSize: "1rem",
          },
        },
      },
      hide: {
        display: "none",
      },
      appBar: {
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 1rem",
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.down("xs")]: {
          marginRight: 0,
        },
      },
      navBtns: {
        display: "flex",
        justifyContent: "space-evenly",
        "& button": {
          [theme.breakpoints.down("xs")]: {
            fontSize: "0.75rem",
            width: "1rem",
          },
        },
      },
    }),
    //Giving name to the generated HTML style tag : for debugging purpose only ;)
    { name: "NewPaletteFormNav" }
  )();
};
