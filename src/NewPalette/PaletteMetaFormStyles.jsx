import { makeStyles } from "@material-ui/core";

export default makeStyles(
  () => ({
    emojiDialog: {
      "& .emoji-mart .emoji-mart-emoji:focus": {
        outline: "none",
      },
    },
    paletteNameDialog: {},
  }),
  //Giving name to the generated HTML style tag : for debugging purpose only ;)
  { name: "PaletteMetaForm" }
);
