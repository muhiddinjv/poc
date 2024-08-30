import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// Start by making sure the `assemblyai` package is installed.
// If not, you can install it by running the following command:
// npm install assemblyai

import { AssemblyAI } from 'assemblyai';

const client = new AssemblyAI({
  apiKey: '478c3155c2384010bdd7ebbfc6b10844',
});

const FILE_URL = 'https://storage.googleapis.com/aai-web-samples/5_common_sports_injuries.mp3';

// You can also transcribe a local file by passing in a file path
// const FILE_URL = './path/to/file.mp3';

// Request parameters where auto_highlights has been enabled
const data = {
  audio: FILE_URL,
  auto_highlights: true
}

const run = async () => {
  const transcript = await client.transcripts.transcribe(data);
  console.log(transcript.text);

  for (let result of transcript.auto_highlights_result.results) {
    console.log(
      `Highlight: ${result.text}, Count: ${result.count}, Rank: ${result.rank}`
    );
  }
};

// run();

const Dictaphone = () => {
    const {
      transcript,
      listening,
      resetTranscript,
      browserSupportsSpeechRecognition
    } = useSpeechRecognition();
  
    if (!browserSupportsSpeechRecognition) {
      return (
        <div className="text-center text-gray-500 py-4">
          <span>Browser doesn't support speech recognition.</span>
        </div>
      );
    }
  
    return (
      <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
        <p className="text-lg font-medium mb-2">Dictaphone</p>
        <div className="flex items-center mb-4">
          <p className="mr-2">Microphone: {listening ? 'on' : 'off'}</p>
          <button
            className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ${listening ? 'hidden' : ''}`}
            onClick={SpeechRecognition.startListening}
          >
            Start
          </button>
          <button
            className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ${!listening ? 'hidden' : ''}`}
            onClick={SpeechRecognition.stopListening}
          >
            Stop
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={resetTranscript}
          >
            Reset
          </button>
        </div>
        <p className="text-lg font-medium">{transcript}</p>
      </div>
    );
  };
export default Dictaphone;