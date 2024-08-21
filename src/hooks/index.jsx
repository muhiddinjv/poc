import React, { useEffect, useRef, useState } from "react";

export const useSpeechToText = (options) => {
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
    recognition.interimResults = options?.interimResults || true;
    recognition.lang = options?.lang || 'en-US';
    recognition.continuous = options?.continuous || false;

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
      console.log('Recognition ended.');
      setIsListening(false);
      setTranscript('');

      if (options?.continuous && isListening) {
        recognition.start();  // Restart recognition if it ended unexpectedly
        setIsListening(true);
      }
    };

    return () => {
      recognition.stop()
    }
  }, [options?.continuous]);

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

export const useSpeechToTexts = () => {
  const [spokenTexts, setSpokenTexts] = useState([]);
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null); // useRef to hold the recognition instance

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognition(); // Initialize the recognition instance
    recognitionRef.current.continuous = false;
    recognitionRef.current.lang = 'en-US';
    recognitionRef.current.interimResults = false;
    recognitionRef.current.maxAlternatives = 1;

    const handleResult = (event) => {
      const transcript = event.results[0][0].transcript;
      setTranscript(transcript);
      setSpokenTexts((prevTexts) => [...prevTexts, transcript]);
    };

    const handleError = (event) => {
      console.error('Recognition error:', event.error);
    };

    recognitionRef.current.onresult = handleResult;
    recognitionRef.current.onerror = handleError;
    recognitionRef.current.onend = () => setIsListening(false); // Update the state when recognition ends

    return () => {
      recognitionRef.current.stop(); // Cleanup: Stop recognition when the component unmounts
    };
  }, []);

  const startListening = () => {
    setIsListening(true);
    recognitionRef.current?.start(); // Safe check before starting recognition
  };

  const stopListening = () => {
    setIsListening(false);
    recognitionRef.current?.stop(); // Safe check before stopping recognition
  };

  return { spokenTexts, transcript, isListening, startListening, stopListening };
};