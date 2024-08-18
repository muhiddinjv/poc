import React, { useEffect } from "react";

let recognition = null;
if ("webkitSpeechRecognition" in window) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRecognition();
  recognition.continuous = true;
  // recognition.interimResults = true; 
  recognition.lang = 'en-US';
}

export const useSpeechRecognition = () => {
  const [transcript, setTranscript] = React.useState('');
  const [isListening, setIsListening] = React.useState(false);
  console.log(transcript)

  useEffect(() => {
    if(!recognition) return;

    recognition.onresult = (event) => {
      console.log('onresult even: ', event)
      setTranscript(event.results[0][0].transcript);
      recognition.stop();
      setIsListening(false);
    };
  }, []);

  const startListening = () => {
      setTranscript('');
      setIsListening(true);
      recognition.start();
  };

  const stopListening = () => {
      setIsListening(false);
      recognition.stop();
  };

  return { transcript, isListening, startListening, stopListening, hasRecognitionSupport: !!recognition };
};