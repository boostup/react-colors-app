import chroma from "chroma-js";

import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    width: "25%",
    height: "20%",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.5)",
      transition: "all 0.3s ease-out",
    },
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0",
    bottom: "0",
    padding: "10px",
    color: (props) =>
      chroma(props.color).luminance() <= 0.08
        ? "rgba(255,255,255,0.8)"
        : "rgba(0,0,0,0.6)",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between",
  },
  deleteIcon: {},
}));
