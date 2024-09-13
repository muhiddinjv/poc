import React, { useState } from "react";
import { useSpeech } from "react-text-to-speech";
import BackBtn from "../../components/BackBtn";
import { story } from "./wordData";

export default function Story() {
  const [highlightText, setHighlightText] = useState(true);

  const { Text, speechStatus, start, stop } = useSpeech({
    highlightText,
    text: story,
    lang: "es-US",
    rate: 0.8,
    voiceURI: "Microsoft Paloma Online (Natural) - Spanish (United States)",
    highlightProps: {
      style: { color: "white", backgroundColor: "purple" },
    },
  });

  return (
    <section className="min-h-screen bg-purple-500 flex flex-col items-center p-4">
      <div className="px-4 py-6 bg-white rounded-lg flex flex-col max-w-lg w-full">
        <div className="flex items-center w-full">
          <BackBtn textColor="text-purple-600" />
          <span className="text-2xl text-center text-purple-600">
            Problema del Jinete
          </span>
        </div>
        <div className="p-4 max-w-2xl mx-auto whitespace-pre-wrap">
          <Text />
          <div className="mt-8 flex space-x-4">
            <button onClick={speechStatus === "started" ? stop : start} className={`bg-${speechStatus === "started" ? 'yellow' : 'blue'}-500 text-white px-4 py-2 rounded`}>
              {speechStatus === "started" ? "Stop" : "Start"}
            </button>
            <button
              className={`bg-${highlightText ? 'purple' : 'slate'}-500 text-white px-4 py-2 rounded`}
              onClick={() => setHighlightText(!highlightText)}
            >
              Highlight
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}