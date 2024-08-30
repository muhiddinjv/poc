import React from "react";
import BackBtn from "../../components/BackBtn";
import { useSpeech } from "react-text-to-speech";
import { story } from "./wordData";

function Story() {
  const { Text, speechStatus, start, pause, stop } = useSpeech({
    text: story,
    lang: "es-US",
    voiceURI: "Google español de Estados Unidos",
  });
  console.log(speechStatus);

  return (
    <section className="min-h-screen bg-purple-500 flex flex-col items-center p-4">
      <div className="px-4 py-6 bg-white rounded-lg flex flex-col max-w-lg w-full">
        <div className="flex items-center">
          <BackBtn textColor="text-purple-600" />
          <span className="text-3xl text-center text-purple-600">
            Headless Horseman
          </span>
        </div>
        <div className="p-4 max-w-2xl mx-auto">
          <div className="mb-4 flex flex-wrap">
            <Text />
          </div>
          <div className="mt-4 flex space-x-4">
            <button
              className={`${
                speechStatus === "started" ? "bg-yellow-500" : "bg-blue-500"
              } text-white px-4 py-2 rounded`}
              onClick={speechStatus === "started" ? pause : start}
            >
              {speechStatus === "started" ? "Pause" : "Play"}
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={stop}
            >
              Stop
            </button>
          </div>
        </div>
        {/* <WordHighlighter /> */}
      </div>
    </section>
  );
}

export default Story;
