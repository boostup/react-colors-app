import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    borderRadius: "5px",
    border: "1px solid black",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      cursor: "pointer",
    },
  },
  colors: {
    backgroundColor: "grey",
    height: "150px",
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    alignContent: "flex-start",
  },

  miniColorBox: {
    height: "25%",
    width: "20%",
  },
  deleteIcon: {
    height: "15%",
    width: "14%",
    maxWidth: "30px",
    color: "white",
    fontSize: "1rem",
    padding: "6px",
    position: "absolute",
    backgroundColor: "#eb3d30",
    top: 0,
    right: "0",
    "&:hover": {
      backgroundColor: "#EA3426",
    },
  },
}));
