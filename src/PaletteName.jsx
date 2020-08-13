import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteName";

function PaletteName(props) {
  const { name, emoji, classes, asTitle } = props;

  let rootClass = asTitle
    ? `${classes.PaletteName} asTitle`
    : classes.PaletteName;

  return (
    <h5 className={rootClass}>
      <span className={classes.name}>{name}</span>
      <span className={classes.emoji}>{emoji}</span>
    </h5>
  );
}

export default withStyles(styles)(PaletteName);
