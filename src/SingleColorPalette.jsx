import React from "react";
import ColorBox from "./ColorBox";

function SingleColorPalette(props) {
  const { colorId, palette } = props;
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
      key={color.id}
      name={color.name}
      background={color.hex}
      showMoreBtn={false}
    />
  ));
  return (
    <div className="Palette">
      <h1>Shades</h1>
      <div
        className="Palette-colors {
"
      >
        {colorBoxes}
      </div>
    </div>
  );
}

export default SingleColorPalette;
