import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
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
}));
