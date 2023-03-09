import React from "react";
import KeyboardSlice from "./KeyboardSlice";

export default function Keyboard(props) {
  return (
    <div className="keyboard">
      {props.keyboardNumber.map((k) => (
        <KeyboardSlice key={k} octave={k} noteFunction={props.clickFunction} />
      ))}
    </div>
  );
}
