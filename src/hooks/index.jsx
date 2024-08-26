import React, { useCallback, useEffect, useRef, useState } from "react";
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
    recognition.lang = options?.lang || 'es-MX';
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

export const useTextToSpeech = () => {
  const [text, setText] = useState('');
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const voices = synth.getVoices();
    const googleEspanol = voices.find(voice => voice.name === 'Google español de Estados Unidos');
    setSelectedVoice(googleEspanol);
  }, []);

  const speak = () => {
    if (text !== '') {
      const utterThis = new SpeechSynthesisUtterance(text);
      utterThis.voice = selectedVoice;
      utterThis.pitch = 1;
      utterThis.rate = 1;
      window.speechSynthesis.speak(utterThis);
      setSpeaking(true);
    }
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setSpeaking(false);
  };

  return {
    text,
    setText,
    speak,
    stopSpeaking,
    speaking,
  };
};

export const useSpacedRepetition = () => {
  const getDay = (forDate = Date.now()) => {
    const DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;
    return Math.floor(forDate / DAY_IN_MILLISECONDS);
  };

  const computeNextRepetition = (card) => {
    const today = getDay();
    const lastReviewDay = getDay(new Date(card.nextReviewDate));

    if (lastReviewDay >= today) {
      return lastReviewDay;
    }

    let efactor = card.easeFactor;
    if (card.repetition >= 1) {
      efactor += 0.1 - (4 - card.easeFactor) * (0.08 + (4 - card.easeFactor) * 0.02);
      efactor = Math.max(1.3, efactor);
    }

    return today + Math.ceil(card.interval * efactor);
  };

  const getDueCards = useCallback((cards) => {
    const today = getDay();
    return cards
      .map((card) => [card, computeNextRepetition(card)])
      .filter(([, nextRepetition]) => nextRepetition <= today);
  }, [computeNextRepetition, getDay]);

  return { getDueCards };
};

function supermemo(item, grade) {
  let nextInterval, nextRepetition, nextEfactor;

  if (grade >= 3) {
    if (item.repetition === 0) {
      nextInterval = 1;
      nextRepetition = 1;
    } else if (item.repetition === 1) {
      nextInterval = 6;
      nextRepetition = 2;
    } else {
      nextInterval = Math.round(item.interval * item.efactor);
      nextRepetition = item.repetition + 1;
    }
  } else {
    nextInterval = 1;
    nextRepetition = 0;
  }

  nextEfactor =
    item.efactor + (0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02));

  if (nextEfactor < 1.3) nextEfactor = 1.3;

  return {
    interval: nextInterval,
    repetition: nextRepetition,
    efactor: nextEfactor,
  };
}

export const calculateNextReview = (card, difficulty) => {
  const { interval, repetition, efactor } = card;

  // Calculate new interval, repetition, and efactor using supermemo algorithm
  const { interval: nextInterval, repetition: nextRepetition, efactor: nextEfactor } = supermemo(
    { interval, repetition, efactor }, difficulty
  );

  // Compute the next review date based on the new interval
  const nextReviewDate = new Date(Date.now() + nextInterval * 24 * 60 * 60 * 1000);

  return {
    ...card,
    interval: nextInterval,
    repetition: nextRepetition,
    efactor: nextEfactor,
    nextReviewDate,
  };
};




