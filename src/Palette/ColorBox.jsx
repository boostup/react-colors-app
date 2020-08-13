import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import useStyles from "./ColorBoxStyles";

function ColorBox(props) {
  const { name, background, moreURL, showMoreBtn } = props;
  const classes = useStyles(props);
  // console.log(classes);
  const [copied, setCopied] = useState(false);

  let copiedMessageTimeoutId = null;

  const onCopyState = () => {
    setCopied(true);
    copiedMessageTimeoutId = setTimeout(() => setCopied(false), 1500);
  };
  useEffect(() => {
    return clearTimeout(copiedMessageTimeoutId);
  }, [copiedMessageTimeoutId]);

  return (
    <CopyToClipboard text={background} onCopy={onCopyState}>
      <div style={{ background }} className={classes.ColorBox}>
        <div
          style={{ background }}
          className={`${classes.copiedOverlay} ${
            copied && classes.showCopiedOverlay
          }`}
        />
        <div
          className={`${classes.copiedMsg} ${copied && classes.showCopiedMsg}`}
        >
          <h1>Copied !</h1>
          <p className={classes.copiedColorString}>{background}</p>
        </div>
        <div>
          <div className={classes.boxContent}>
            <span className={classes.colorName}>{name}</span>
          </div>
          <button className={classes.copyButton}>Copy</button>
        </div>

        {showMoreBtn && (
          <Link to={moreURL} onClick={(e) => e.stopPropagation()}>
            <span className={classes.seeMore}>More</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
}

export default ColorBox;
