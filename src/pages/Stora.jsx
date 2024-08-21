import React, { useState, useRef, useEffect } from 'react';

const story = `There is a man. He is a horseman. He is a headless horseman. He is in America. He is in New York City. Ha has a problem. He has a big problem. He goes to Washington. He goes to Bill Gates’s house in Washington. Bill is a rich man. He has 123 billion dollars and he has a big house. The horseman says “I have a problem. Can you help me?”. Bill says “No, I can not help you. Go to Elon Musk.” He goes to Texas. He goes to Elon Musk’s house in Texas. Elon is a rich man. He has 196 billion dollars but he has a small house. The horseman says “I have a problem. Can you help me?”. Elon says “No, I can not help you. Go to Doctor Dolittle.” He goes to California. He goes to Doctor Dolittle’s house in California. Dolittle is a doctor. He has animals and he has a big house. The horseman says “I have a problem. Can you help me?”. Dolittle says “Yes, I can help you. What’s your problem?” The headless horseman says “I have a headache.”`;

const wordTimings = [
  { word: "There", start: 0.5, end: 1.0 },
  { word: "is", start: 1.1, end: 1.4 },
  { word: "a", start: 1.5, end: 1.6 },
  { word: "man", start: 1.7, end: 2.0 },
  // Add all the words and their timings here
];

const WordHighlighter = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const audioRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      const audio = audioRef.current;
      const startTime = wordTimings[currentWordIndex]?.start || 0;
      audio.currentTime = startTime;
      audio.play();

      intervalRef.current = setInterval(() => {
        const currentTime = audio.currentTime;
        const nextWordIndex = wordTimings.findIndex(
          (word, index) => index > currentWordIndex && currentTime >= word.start
        );
        if (nextWordIndex !== -1) {
          setCurrentWordIndex(nextWordIndex);
        } else if (currentTime > wordTimings[wordTimings.length - 1].end) {
          handleStop();
        }
      }, 100);

    } else {
      handleStop();
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isPlaying, currentWordIndex]);

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);
  const handleStop = () => {
    setIsPlaying(false);
    setCurrentWordIndex(0);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const renderText = () => {
    const words = story.split(' ');
    return words.map((word, index) => {
      const isActive = wordTimings[currentWordIndex]?.word === word;
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
      <div className="mb-4">{renderText()}</div>
      <audio ref={audioRef} src="/path/to/story.mp3" />
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
