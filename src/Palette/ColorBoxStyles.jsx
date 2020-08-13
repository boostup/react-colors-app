import chroma from "chroma-js";

import { makeStyles } from "@material-ui/core";

export default (props) => {
  return makeStyles(() => ({
    ColorBox: {
      width: "20%",
      height: () => (props.doubleHeight ? "50%" : "25%"),
      display: "inline-block",
      position: "relative",
      cursor: "pointer",
      "&:hover button": {
        opacity: 1,
      },
    },
    colorName: {
      color: () =>
        chroma(props.background).luminance() <= 0.08 ? "white" : "black",
    },
    seeMore: {
      color: () =>
        chroma(props.background).luminance() >= 0.7
          ? "rgba(0,0,0,0.5)"
          : "white",
      background: "rgba(255, 255, 255, 0.3)",
      position: "absolute",
      border: "none",
      right: 0,
      bottom: 0,
      width: "60px",
      height: "30px",
      textAlign: "center",
      lineHeight: "30px",
      textTransform: "uppercase",
    },
    copyButton: {
      color: () =>
        chroma(props.background).luminance() >= 0.7
          ? "rgba(0,0,0,0.5)"
          : "white",
      width: "100px",
      height: "30px",
      position: "absolute",
      display: "inline-block",
      top: "50%",
      left: "50%",
      marginLeft: "-50px",
      marginTop: "-15px",
      textAlign: "center",
      outline: "none",
      background: "rgba(255, 255, 255, 0.3)",
      fontSize: "1rem",
      lineHeight: "30px",
      textTransform: "uppercase",
      border: "none",
      opacity: "0",
    },
    boxContent: {
      position: "absolute",
      width: "100%",
      left: "0",
      bottom: "0",
      padding: "10px",
      color: "black",
      letterSpacing: "1px",
      textTransform: "uppercase",
      fontSize: "12px",
    },
    copiedColorString: {
      color: () =>
        chroma(props.background).luminance() >= 0.7 ? "black" : "white",
    },
    copiedMsg: {
      position: "fixed",
      left: "0",
      right: "0",
      top: "0",
      bottom: "0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      fontSize: "4rem",
      transform: "scale(0)",
      opacity: "0",
      color: "white",
      "& h1": {
        fontWeight: "400",
        textShadow: "1px 2px black",
        background: "rgba(255, 255, 255, 0.2)",
        width: "100%",
        textAlign: "center",
        marginBottom: "0",
        padding: "1rem",
      },
      "& p": {
        fontWeight: "100",
        fontSize: "2rem",
      },
    },
    showCopiedMsg: {
      opacity: "1",
      transform: "scale(1)",
      zIndex: "25",
      transition: "transform 0.4s ease-in-out",
      transitionDelay: "0.3s",
    },
    copiedOverlay: {
      opacity: "0",
      zIndex: "0",
      width: "100%",
      height: "100%",
      transform: "scale(0.1)",
      transition: "transform 0.6s ease-in-out",
    },
    showCopiedOverlay: {
      opacity: "1",
      transform: "scale(50)",
      zIndex: "10",
      position: "absolute",
    },
  }))();
};
