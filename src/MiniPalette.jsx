import React from "react";
import { withStyles } from "@material-ui/styles";

function MiniPalette(props) {
  const { classes } = props;

  return (
    <div className={classes.main}>
      <h1>mini palette</h1>
    </div>
  );
}

const styles = {
  main: {
    backgroundColor: "purple",
    border: "3px solid teal",
  },
};

export default withStyles(styles)(MiniPalette);
