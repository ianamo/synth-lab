import React from "react";

export default function KeyboardSlice(props) {
  const octave = props.octave;
  function sendNote(event) {
    const myNote = { noteName: event.target.value, boardOctave: octave };
    props.noteFunction(myNote);
  }
  return (
    <div className="keyboard-slice">
      <button
        onClick={sendNote}
        value="C#"
        className="black-key c-sharp"
      ></button>
      <button onClick={sendNote} value="C" className="key"></button>
      <button
        onClick={sendNote}
        value="D#"
        className="black-key d-sharp"
      ></button>
      <button onClick={sendNote} value="D" className="key"></button>
      <button onClick={sendNote} value="E" className="key"></button>
      <button onClick={sendNote} value="F" className="key"></button>
      <button
        onClick={sendNote}
        value="F#"
        className="black-key f-sharp"
      ></button>
      <button onClick={sendNote} value="G" className="key"></button>
      <button
        onClick={sendNote}
        value="G#"
        className="black-key g-sharp"
      ></button>
      <button onClick={sendNote} value="A" className="key"></button>
      <button
        onClick={sendNote}
        value="A#"
        className="black-key a-sharp"
      ></button>
      <button onClick={sendNote} value="B" className="key"></button>
    </div>
  );
}
