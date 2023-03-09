import React from "react";
import Switch from "@mui/material/Switch";

import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";

export default function RecordingControls(props) {
  return (
    <div>
      <textarea
        value={props.score}
        rows="10"
        cols="45"
        placeholder="Notes recorded here"
      />
      <br />
      <FormControlLabel
        label="Record Notes"
        labelPlacement="top"
        control={<Switch color="primary" onChange={props.checkFunction} />}
      />

      <Button onClick={props.playFunction}>PLAYBACK</Button>
      <Button onClick={props.clearFunction}>CLEAR</Button>
    </div>
  );
}
