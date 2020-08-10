import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "./DraggableColorBox";

function DraggableColorList({ colors, onRemoveColor }) {
  return (
    <div style={{ height: "100%" }}>
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
