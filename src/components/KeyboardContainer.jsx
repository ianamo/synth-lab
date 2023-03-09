import React from "react";
import Keyboard from "./Keyboard";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Fab from "@mui/material/Fab";

export default function KeyboardContainer(props) {
  return (
    <div className="keyboard-container">
      <Keyboard
        keyboardNumber={props.number}
        clickFunction={props.clickFunction}
      />
      <div className="button-container">
        <Fab
          className="top-button"
          onClick={props.addFunction}
          size="small"
          color="primary"
        >
          <AddIcon />
        </Fab>
        <br />
        <Fab onClick={props.rmFunction} size="small" color="primary">
          <RemoveIcon />
        </Fab>
      </div>
    </div>
  );
}
