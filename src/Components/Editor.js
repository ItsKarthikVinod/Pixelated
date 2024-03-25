import React, { useState } from "react";
import "../Styles/editor.css";
import { CirclePicker } from "react-color";
import DrawingPanel from "./DrawingPanel";

function Editor() {
  const [panelWidth, setPanelWidth] = useState(16);
  const [panelHeight, setPanelHeight] = useState(16);
  const [hideOptions, setHideOptions] = useState(false);
  const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
  const [buttonText, setButtonText] = useState("start drawing");
  const [selectedColor, setColor] = useState("#f44336");

  function initialiseDrawingPanel() {
    setHideOptions(!hideOptions);
    setHideDrawingPanel(!hideDrawingPanel);

    buttonText === "start drawing"
      ? setButtonText("reset")
      : setButtonText("start drawing");
  }

  function changeColor(color) {
    setColor(color.hex);
  }

  return (
    <div id="editor">
      <h1>Pixelated</h1>
      {hideDrawingPanel && <h2>Enter Panel Dimensions 👉 </h2>}
      {hideDrawingPanel && (
        <div id="options">
          <div className="option">
            <input
              type="number"
              className="panelInput"
              defaultValue={panelWidth}
              onChange={(e) => {
                setPanelWidth(e.target.value);
              }}
            />
            <span>Width</span>
          </div>
          <div className="option">
            <input
              type="number"
              className="panelInput"
              defaultValue={panelHeight}
              onChange={(e) => {
                setPanelHeight(e.target.value);
              }}
            />
            <span>Height</span>
          </div>
        </div>
      )}
      <button onClick={initialiseDrawingPanel} className="button">
        {buttonText}
      </button>
      {hideOptions && (
        <CirclePicker color={selectedColor} onChangeComplete={changeColor} />
      )}
      {hideOptions && (
        <DrawingPanel
          width={panelWidth}
          height={panelHeight}
          selectedColor={selectedColor}
        />
      )}
      <div className="footer">© Karthik Vinod 2024 🕶</div>
    </div>
  );
}

export default Editor;
