import { makeStyles } from "@material-ui/core";

export default makeStyles(
  (theme) => ({
    Navbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "6vh",
    },
    logo: {
      padding: theme.spacing(0, 1),
      fontSize: "22px",
      backgroundColor: "#eceff1",
      height: "100%",
      display: "flex",
      alignItems: "center",
      "& a": {
        textDecoration: "none",
        color: "black",
      },
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    levelAndSliderContainer: {
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
        padding: theme.spacing(0, 1),
      },
    },
    level: {
      padding: "0 8px",
      [theme.breakpoints.down("xs")]: {
        position: "relative",
        top: "12px",
        left: "-39px",
      },
    },
    slider: {
      width: "340px",
      display: "inline-block",
      "& .MuiSlider-rail, .MuiSlider-track": {
        height: "7px",
        color: "#e9e9e9",
        borderRadius: "6px",
      },
      "& .MuiSlider-thumb": {
        color: "green",
        marginTop: "-2px",
      },
      "& .MuiSlider-track": {
        transition: "width 0.5s ease-in",
      },
      "& .MuiSlider-mark, .MuiSlider-markActive": {
        color: "#aadcb6",
        backgroundColor: "#aadcb6",
        height: "6px",
      },
      [theme.breakpoints.down("sm")]: {
        width: "150px",
      },
    },
    selectContainer: { padding: theme.spacing(0, 1) },
  }),
  //Giving name to the generated HTML style tag : for debugging purpose only ;)
  { name: "Navbar" }
);
