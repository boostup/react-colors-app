import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "./DraggableColorBox";

function DraggableColorList({ colors, onRemoveColor }) {
  return (
    <div
      style={{
        height: "calc(100vh - 64px)",
        display: "flex",
        flexWrap: "wrap",
        alignContent: "flex-start",
      }}
    >
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
