import { useState, useEffect } from "react";

const useSpeechHandler = (transcript, locked, handleAnswerClick) => {
  const [finalTranscript, setFinalTranscript] = useState("");

  useEffect(() => {
    if (transcript && !locked) {
      const trimmedTranscript = transcript.trim();
      setFinalTranscript(trimmedTranscript);
      handleAnswerClick(trimmedTranscript);
    }
  }, [transcript, locked, handleAnswerClick]);

  return finalTranscript;
};

export default useSpeechHandler;
