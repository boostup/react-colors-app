import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "./DraggableColorBox";
import clsx from "clsx";
import useStyles from "./DraggableColorListStyles";

function DraggableColorList({
  open,
  colors,
  setColors,
  drawerWidth,
  drawerHeaderJSSClass,
}) {
  const classes = useStyles({ drawerWidth });
  const onRemoveColor = (colorName) => {
    setColors(colors.filter((color) => color.name !== colorName));
  };

  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: open,
      })}
    >
      <div className={drawerHeaderJSSClass} />
      <div className={classes.root}>
        {colors.map((color, i) => (
          <DraggableColorBox
            key={color.name}
            index={i}
            name={color.name}
            color={color.color}
            onDeleteColorBox={onRemoveColor}
          />
        ))}
      </div>
    </main>
  );
}

export default SortableContainer(DraggableColorList);
