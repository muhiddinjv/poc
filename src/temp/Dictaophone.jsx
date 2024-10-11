import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
const Dictaphone = () => {
 const [message, setMessage] = useState('');
 const commands = [
   {
     command: 'reset',
     callback: () => resetTranscript()
   },
   {
     command: 'shut up',
     callback: () => setMessage('I wasn\'t talking.')
   },
   {
     command: 'Hello',
     callback: () => setMessage('Hi there!')
   },
 ]
 const {
   transcript,
   interimTranscript,
   finalTranscript,
   resetTranscript,
   listening,
 } = useSpeechRecognition({ commands });
 useEffect(() => {
   if (finalTranscript !== '') {
     console.log('Got final result:', finalTranscript);
   }
 }, [interimTranscript, finalTranscript]);
 if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
   return null;
 }
 if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
   console.log('Your browser does not support speech recognition software! Try Chrome desktop, maybe?');
 }
 const listenContinuously = () => {
   SpeechRecognition.startListening({
      
     language: 'en-GB',
   });
 };
 return (
  <div className="flex flex-col items-center">
    <div className="flex justify-between w-full max-w-sm">
      <span className="text-gray-500">listening: {listening ? 'on' : 'off'}</span>
      <div className="flex gap-2">
        <button type="button" onClick={resetTranscript} className="px-4 py-2 bg-gray-200 rounded">Reset</button>
        <button type="button" onClick={listenContinuously} className="px-4 py-2 bg-blue-500 text-white rounded">Listen</button>
        <button type="button" onClick={SpeechRecognition.stopListening} className="px-4 py-2 bg-gray-200 rounded">Stop</button>
      </div>
    </div>
    <div className="mt-4 text-lg font-bold">{message}</div>
    <div className="mt-4 text-gray-700">{transcript}</div>
  </div>
);
};
export default Dictaphone;