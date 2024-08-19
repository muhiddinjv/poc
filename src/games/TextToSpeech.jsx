import React, { useState, useEffect } from 'react';

const TextToSpeech = (textInput) => {
  const [text, setText] = useState('');
  const [selectedVoice, setSelectedVoice] = useState(null);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const voices = synth.getVoices();
    const davidVoice = voices.find(voice => voice.name === 'Microsoft David - English (US)');
    setSelectedVoice(davidVoice);
    setText(textInput.textInput)
  }, []);

  const handleSpeak = () => {
    if (text !== '') {
      const utterThis = new SpeechSynthesisUtterance(text);
      utterThis.voice = selectedVoice;
      utterThis.pitch = 1;
      utterThis.rate = 1;
      window.speechSynthesis.speak(utterThis);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      {/* <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-400 rounded"
        placeholder="Enter text to speak"
      /> */}
      <button
        onClick={handleSpeak}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Play
      </button>
    </div>
  );
};

export default TextToSpeech;