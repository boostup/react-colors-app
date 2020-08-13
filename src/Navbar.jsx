import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import useStyles from "./styles/Navbar";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

function Navbar({ showLevelSlider, level, changeLevel, changeColorFormat }) {
  const classes = useStyles();
  const [colorFormat, setColorFormat] = useState("hex");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const onColorFormatChange = (e) => {
    setColorFormat(e.target.value);
    changeColorFormat(e.target.value);
    setSnackbarOpen(true);
  };

  const closeSnackbar = () => setSnackbarOpen(false);

  return (
    <header className={classes.Navbar}>
      <div className={classes.logo}>
        <Link to="/">react colors</Link>
      </div>
      {showLevelSlider && (
        <div>
          <span>Level: {level}</span>
          <div className={classes.slider}>
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
      )}
      <div className={classes.selectContainer}>
        <Select value={colorFormat} onChange={onColorFormatChange}>
          <MenuItem value="hex">Hex #ffffff</MenuItem>
          <MenuItem value="rgb">rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">rgba(255,255,255,1.0)</MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={snackbarOpen}
        onClose={closeSnackbar}
        autoHideDuration={3000}
        message={
          <span id="message-id">
            Format changed to {colorFormat.toUpperCase()}
          </span>
        }
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        action={[
          <IconButton
            onClick={closeSnackbar}
            color="inherit"
            key="close"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </header>
  );
}

export default Navbar;
