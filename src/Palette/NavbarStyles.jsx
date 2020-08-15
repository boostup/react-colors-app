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
    },
    levelAndSliderContainer: {
      display: "flex",
      alignItems: "center",
    },
    level: {
      padding: "0 8px",
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
    },
    selectContainer: { padding: theme.spacing(0, 1) },
  }),
  //Giving name to the generated HTML style tag : for debugging purpose only ;)
  { name: "Navbar" }
);
