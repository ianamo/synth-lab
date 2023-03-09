import React from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import Fab from "@mui/material/Fab";

export default function OctaveNoteControls(props) {
  return (
    <div className="octave-note-container">
      <Fab onClick={props.lowerOctave} size="small" color="primary">
        <ArrowLeftIcon />
      </Fab>{" "}
      OCT:{props.offset}{" "}
      <Fab onClick={props.raiseOctave} size="small" color="primary">
        <ArrowRightIcon />
      </Fab>
      <br />
      <ToggleButtonGroup
        value={props.length}
        onChange={(event, value) => props.handleNote(value)}
        exclusive
      >
        <ToggleButton value="1n">
          <img className="icon" alt="whole note" src="images/semibreve.png" />
        </ToggleButton>
        <ToggleButton value="2n">
          <img className="icon" alt="half note" src="images/minim.png" />
        </ToggleButton>
        <ToggleButton value="4n">
          <img className="icon" alt="quarter note" src="images/crotchet.png" />
        </ToggleButton>
        <ToggleButton value="8n">
          <img
            className="icon"
            alt="eighth note"
            src="images/musical-note.png"
          />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
