import React from "react";
import Speech from "react-text-to-speech";

export default function TTS() {
  return (
    <Speech text="Hay un chico. El chico es George. George es chico normal" pitch={1.5} rate={1} volume={0.5} voiceURI="Microsoft Heera - English (India)">
      {({ speechStatus, isInQueue, start, pause, stop }) => (
        <div style={{ display: "flex", columnGap: "0.5rem" }}>
          {speechStatus !== "started" ? <button onClick={start}>Start</button> : <button onClick={pause}>Pause</button>}
          <button onClick={stop}>Stop</button>
        </div>
      )}
    </Speech>
  );
}