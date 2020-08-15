import { makeStyles } from "@material-ui/core";

export default makeStyles(
  (theme) => ({
    Navbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      height: "6vh",
    },
    logo: {
      marginRight: "50px",
      padding: "0 13px",
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
    slider: {
      width: "340px",
      margin: "0 10px",
      display: "inline-block",
      "& .rc-slider-track": {
        backgroundColor: "transparent",
      },
      "& .rc-slider-rail": {
        height: "8px",
      },
      "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover": {
        backgroundColor: "green",
        outline: "none",
        border: "2px solid green",
        boxShadow: "none",
        width: "13px",
        height: "13px",
        marginTop: "-2px",
      },
      [theme.breakpoints.down("sm")]: {
        width: "150px",
      },
    },
    selectContainer: {
      marginLeft: "auto",
      marginRight: "1rem",
    },
  }),
  //Giving name to the generated HTML style tag : for debugging purpose only ;)
  { name: "Navbar" }
);
