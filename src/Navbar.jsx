import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
//This import must remain after the "rc-slider/assets/index.css" import (this is to avoid using !important in our CSS)
import "./Navbar.css";
import { Icon } from "@material-ui/core";

function Navbar(props) {
  const { level, changeLevel, changeColorFormat } = props;
  const [colorFormat, setColorFormat] = useState("hex");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  function onColorFormatChange(e) {
    setColorFormat(e.target.value);
    changeColorFormat(e.target.value);
    setSnackbarOpen(true);
  }

  function closeSnackbar() {
    setSnackbarOpen(false);
  }

  return (
    <header className="Navbar">
      <div className="logo">
        <a href="#">react colors</a>
      </div>
      <div className="slider-container">
        <span>Level: {level}</span>
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={changeLevel}
          />
        </div>
      </div>
      <div className="select-container">
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
          "aria-descibedby": "message-id",
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
