import React from "react";
import useStyles from "./styles/PaletteName";

function PaletteName(props) {
  const classes = useStyles();
  const { name, emoji, asTitle } = props;

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

export default PaletteName;
