import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import PaletteFooter from "./PaletteFooter";

function ShadesPalette(props) {
  const { colorId, palette, classes } = props;
  const [colorFormat, setColorFormat] = useState("hex");
  const changeColorFormat = (value) => setColorFormat(value);
  const getShades = () => {
    let shades = [];
    const allColors = palette.colors;
    for (const key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorId)
      );
    }
    return shades.slice(1);
  };
  const colorShades = getShades();
  const colorBoxes = colorShades.map((color) => (
    <ColorBox
      key={color.name}
      name={color.name}
      background={color[colorFormat]}
      showMoreBtn={false}
      doubleHeight
    />
  ));
  return (
    <div className={classes.Palette}>
      <Navbar changeColorFormat={changeColorFormat} />
      <div className={classes.PaletteColors}>
        {colorBoxes}
        <div className={classes.goBackContainer}>
          <Link to={`/palette/${palette.id}`}>
            <span className={classes.goBackButton}>Go Back</span>
          </Link>
        </div>
      </div>
      <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
}

const styles = {
  Palette: {
    height: "100%",
    width: "100%",
  },
  PaletteColors: {
    display: "flex",
    flexFlow: "wrap",
    height: "90vh",
  },
  goBackContainer: {
    backgroundColor: "black",
    height: "50%",
    width: "20%",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
  },
  goBackButton: {
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
    color: "white",
    textTransform: "uppercase",
    border: "none",
    opacity: "1",
  },
};

export default withStyles(styles)(ShadesPalette);
