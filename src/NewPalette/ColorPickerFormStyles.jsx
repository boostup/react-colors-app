import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  form: {
    width: "100%",
    "& .MuiTextField-root": {
      width: "100%",
      marginTop: "1rem",
    },
  },
  colorPicker: {
    width: "100% !important",
    marginTop: "1.5rem",
  },
  addColorBtn: {
    width: "100%",
    padding: "1rem",
    marginTop: "2rem",
    fontSize: "2rem",
  },
}));
