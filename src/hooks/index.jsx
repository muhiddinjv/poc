import React, { useEffect, useRef } from "react";

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

const useSpeechToText = (options) => {
  const [isListening, setIsListening] = React.useState(false);
  const [transcript, setTranscript] = React.useState('');
  const recognitionRef = useRef(null);

  useEffect(() => {
    if(!("webkitSpeechRecognition" in window)) {
      console.log('No webkitSpeechRecognition support');
      return;
    };

    recognitionRef.current = new window.webkitSpeechRecognition();
    const recognition = recognitionRef.current;
    recognition.interimResults = options.interimResults || true;
    recognition.lang = options.lang || 'en-US';
    recognition.continuous = options.continuous || false;

    if("webkitGrammarList" in window) {
      const grammar = "#JSGF V1.0; grammar punctuation; public <punc > = . | , | ? | ! | ; | : ;";
      const speechRecognitionList = new window.webkitSpeechGrammarList();
      speechRecognitionList.addFromString(grammar, 1);
      recognition.grammars = speechRecognitionList;
    }

    recognition.onresult = (event) => {
      let text = "";
      for (let i = 0; i < event.results.length; i++) {
        text += event.results[i][0].transcript;
      }
      setTranscript(text);
    };

    recognition.error = (event) => {
      console.log('Recognition error:', event.error);
    };

    recognition.onend = () => {
      setIsListening(false);
      setTranscript('');
    };

    return () => {
      recognition.stop()
    }
  }, []);

  const startListening = () => {
    if(recognitionRef.current && !isListening) {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const stopListening = () => {
    if(recognitionRef.current && isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  return { transcript, isListening, startListening, stopListening };
}