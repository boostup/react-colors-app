import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "./DraggableColorBox";
import useStyles from "./styles/DraggableColorList";

function DraggableColorList({ colors, onRemoveColor }) {
  const classes = useStyles();

  return (
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
  );
}

export default SortableContainer(DraggableColorList);
