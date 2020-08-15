import { makeStyles } from "@material-ui/core";

export default makeStyles(
  () => ({
    root: {
      "& .emoji-mart .emoji-mart-emoji:focus": {
        outline: "none",
      },
    },
  }),
  //Giving name to the generated HTML style tag : for debugging purpose only ;)
  { name: "PaletteMetaForm" }
);
