import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBox.css";

function ColorBox(props) {
  const { name, background } = props;
  const [copied, setCopied] = useState(false);

  const onCopyState = () => {
    setCopied(true);
  };

  useEffect(() => {
    setTimeout(() => setCopied(false), 1500);
  }, [copied]);

  return (
    <CopyToClipboard text={background} onCopy={onCopyState}>
      <div style={{ background }} className="ColorBox">
        <div
          style={{ background }}
          className={`ColorBox_copy-overlay ${copied && "show"}`}
        />
        <div className={`ColorBox_copy-msg ${copied && "show"}`}>
          <h1>Copied !</h1>
          <p>{background}</p>
        </div>
        <div className="ColorBox_copy-container">
          <div className="ColorBox_box-content">
            <span>{name}</span>
          </div>
          <button className="ColorBox_copy-button">Copy</button>
        </div>
        <span className="ColorBox_see-more">More</span>
      </div>
    </CopyToClipboard>
  );
}

export default ColorBox;
