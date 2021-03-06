import React from "react";
import { SortableElement } from "react-sortable-hoc";
import DeleteIcon from "@material-ui/icons/Delete";
import useStyles from "./DraggableColorBoxStyles";

function DraggableColorBox(props) {
  const { color, name, onDeleteColorBox } = props;
  const classes = useStyles(props);
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteIcon
          className={classes.deleteIcon}
          onClick={(e) => onDeleteColorBox(name)}
        />
      </div>
    </div>
  );
}

export default SortableElement(DraggableColorBox);
