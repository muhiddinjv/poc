import React, { useState, useRef, useEffect } from 'react';
import { wordTimings, story } from './wordData';

const WordHighlighter = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.play();

      const handleTimeUpdate = () => {
        const currentTime = audio.currentTime;

        // Find the index of the current word based on the audio time
        let newWordIndex = -1;
        for (let i = 0; i < wordTimings.length; i++) {
          if (currentTime >= wordTimings[i].start && currentTime <= wordTimings[i].end) {
            newWordIndex = i;
            break;
          }
        }

        if (newWordIndex !== -1 && newWordIndex !== currentWordIndex) {
          setCurrentWordIndex(newWordIndex);
        }
      };

      audio.addEventListener('timeupdate', handleTimeUpdate);
      return () => {
        audio.removeEventListener('timeupdate', handleTimeUpdate);
      };
    } else {
      audio.pause();
    }
  }, [isPlaying, currentWordIndex]);

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);
  const handleStop = () => {
    setIsPlaying(false);
    setCurrentWordIndex(0);
    audioRef.current.currentTime = 0;
  };

  const renderText = () => {
    const words = story.split(' ');
    return words.map((word, index) => {
      const isActive = index === currentWordIndex;
      return (
        <span
          key={index}
          className={`mx-1 ${isActive ? 'bg-yellow-300' : ''}`}
        >
          {word}
        </span>
      );
    });
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="mb-4 text-2xl border-b border-gray-200 break-all">{renderText()}</div>
      <audio ref={audioRef} src="/aud/story1.mp3" />
      <div className="mt-4 flex space-x-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handlePlay}
          disabled={isPlaying}
        >
          Play
        </button>
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded"
          onClick={handlePause}
          disabled={!isPlaying}
        >
          Pause
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={handleStop}
        >
          Stop
        </button>
      </div>
    </div>
  );
};

export default WordHighlighter;
