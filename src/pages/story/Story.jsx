import React, { useState, useEffect, useRef } from "react";
import BackBtn from "../../components/BackBtn";
import { story } from "./wordData";

function Story() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const paragraphs = story.split("\n\n");

  useEffect(() => {
    audioRef.current = new Audio("/aud/story1spanish-woman.mp3");

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <section className="min-h-screen bg-purple-500 flex flex-col items-center p-4">
      <div className="px-4 py-6 bg-white rounded-lg flex flex-col max-w-lg w-full">
        <div className="flex items-center w-full">
          <BackBtn textColor="text-purple-600" />
          <span className="text-2xl  text-center text-purple-600">
            Problema del Jinete
          </span>
        </div>
        <div className="p-4 max-w-2xl mx-auto">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
          <div className="mt-4 flex space-x-4">
            <button
              className={`${
                isPlaying ? "bg-yellow-500" : "bg-blue-500"
              } text-white px-4 py-2 rounded`}
              onClick={isPlaying ? handlePause : handlePlay}
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={handleStop}
            >
              Stop
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
