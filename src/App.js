import "./styles.css";
import * as Tone from "tone";
import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import KeyboardContainer from "./components/KeyboardContainer";
import OctaveNoteControls from "./components/OctaveNoteControls";
import RecordingControls from "./components/RecordingControls";

export default function App() {
  const [octaveOffset, setOctave] = useState(4);
  const [keyboardNumber, setKeyboardNumber] = useState([0]);
  const synth = new Tone.Synth().toDestination();
  const [noteLength, setNoteLength] = useState("8n");
  const [recordNote, setRecord] = useState(false);
  const [score, addNoteToScore] = useState([]);

  function handleClick(note) {
    Tone.start();
    const { noteName, boardOctave } = note;
    const myOctave = boardOctave + octaveOffset;
    const myNote = noteName + myOctave;
    const attackRelease = noteLength;
    synth.triggerAttackRelease(myNote, attackRelease);
    console.log(note);
    if (recordNote) {
      console.log("Recording note...");
      addNoteToScore((saved) => [...saved, [myNote, attackRelease]]);
    }
  }

  function addKeyboard() {
    const lastNumber = keyboardNumber[keyboardNumber.length - 1];
    setKeyboardNumber((saved) => [...saved, lastNumber + 1]);
  }

  function remKeyboard() {
    const lastBoard = keyboardNumber.length - 1;
    if (keyboardNumber.length > 1) {
      setKeyboardNumber((saved) => saved.filter((k, i) => i !== lastBoard));
    }
  }

  function octaveUp() {
    setOctave(octaveOffset + 1);
  }

  function octaveDown() {
    if (octaveOffset > 1) {
      setOctave(octaveOffset - 1);
    }
  }

  function handleCheck() {
    setRecord(!recordNote);
    console.log(recordNote);
  }

  function playScore() {
    score.forEach((n, i) => {
      const now = Tone.now();
      const [noteName, duration] = n;
      synth.triggerAttackRelease(noteName, duration, now + i);
    });
  }

  function clearScore() {
    addNoteToScore([]);
  }

  return (
    <div className="App">
      <Header />
      <KeyboardContainer
        number={keyboardNumber}
        clickFunction={handleClick}
        addFunction={addKeyboard}
        rmFunction={remKeyboard}
      />
      <br />
      <OctaveNoteControls
        lowerOctave={octaveDown}
        raiseOctave={octaveUp}
        length={noteLength}
        offset={octaveOffset}
        handleNote={setNoteLength}
      />
      <br />
      <RecordingControls
        score={score}
        checkFunction={handleCheck}
        playFunction={playScore}
        clearFunction={clearScore}
      />
      <Footer />
    </div>
  );
}
