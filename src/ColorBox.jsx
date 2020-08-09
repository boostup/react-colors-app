import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import chroma from "chroma-js";
import { withStyles } from "@material-ui/styles";
import "./ColorBox.css";

function ColorBox({ classes, name, background, moreURL, showMoreBtn }) {
  const [copied, setCopied] = useState(false);
  const onCopyState = () => setCopied(true);

  useEffect(() => {
    return () => setTimeout(() => setCopied(false), 1500);
  }, [copied]);

  return (
    <CopyToClipboard text={background} onCopy={onCopyState}>
      <div style={{ background }} className={classes.ColorBox}>
        <div
          style={{ background }}
          className={`${classes.copiedOverlay} ${
            copied && classes.showCopiedOverlay
          }`}
        />
        <div
          className={`${classes.copiedMsg} ${copied && classes.showCopiedMsg}`}
        >
          <h1>Copied !</h1>
          <p className={classes.copiedColorString}>{background}</p>
        </div>
        <div>
          <div className={classes.boxContent}>
            <span className={classes.colorName}>{name}</span>
          </div>
          <button className={classes.copyButton}>Copy</button>
        </div>

        {showMoreBtn && (
          <Link to={moreURL} onClick={(e) => e.stopPropagation()}>
            <span className={classes.seeMore}>More</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
}

const ColorBoxClass = {
  width: "20%",
  height: (props) => (props.doubleHeight ? "50%" : "25%"),
  display: "inline-block",
  position: "relative",
  cursor: "pointer",
  marginBottom: "-3.5px",
  "&:hover button": {
    opacity: 1,
  },
};

const styles = {
  ColorBox: ColorBoxClass,
  colorName: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.08 ? "white" : "black",
  },
  seeMore: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.7 ? "rgba(0,0,0,0.5)" : "white",
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
    color: (props) =>
      chroma(props.background).luminance() >= 0.7 ? "rgba(0,0,0,0.5)" : "white",
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
    color: (props) =>
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
};

export default withStyles(styles)(ColorBox);
