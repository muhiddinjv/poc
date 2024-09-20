import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Question = ({ 
  statement,
  questionObj,
  image,
  onNextQuestion,
  selectedAnswer,
  onQuestionAnswered,
  showStatement
}) => {
  const [currentView, setCurrentView] = useState(showStatement ? 'statement' : 'question');
  const [userAnswer, setUserAnswer] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const { question, answer, message } = questionObj;

  const isCorrect = selectedAnswer && selectedAnswer.toLowerCase() === answer.toLowerCase();

  useEffect(() => {
    if (transcript && currentView === 'question') {
      setUserAnswer(transcript);
    }
  }, [transcript, currentView]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const speak = (text) => {
    setIsPlaying(true);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-US';
    utterance.rate = 0.8;
    // utterance.voiceURI = "Microsoft Paloma Online (Natural) - Spanish (United States)"
    utterance.onend = () => {
      setIsPlaying(false);
      if (currentView === 'statement') {
        setCurrentView('question');
      }
    };
    speechSynthesis.speak(utterance);
  };

  const handlePlay = () => {
    if (currentView === 'statement') {
      speak(statement);
    } else if (currentView === 'question') { 
      speak(question);
      SpeechRecognition.startListening({ continuous: true, language: 'es-US' });
    } else if (currentView === 'answer') {
      speak(`${isCorrect ? `${userAnswer} es correcto! ${message}` : `${userAnswer} es incorrecto! ${message}`}`);
    }
  };

  const handleMicrophoneClick = () => {
    if (listening) {
      SpeechRecognition.stopListening();
      onQuestionAnswered(userAnswer);
      setCurrentView('answer');
    }
  };

  const handleNext = () => {
    onNextQuestion();
    resetTranscript();
    setUserAnswer('');
    setCurrentView('question');
  };

  return (
    <div>
      <div className="flex flex-col items-center pb-2 bg-gray-50 border-b">
        {image && <img src={image} alt="statement visual" className="max-w-72 h-72 rounded" />}
        <div className="flex items-center text-blue-700">
          <FontAwesomeIcon 
            icon={isPlaying ? faVolumeMute : faVolumeUp} 
            onClick={handlePlay}
            className="cursor-pointer p-1 rounded-full"
          />
          <h2 className="text-lg font-semibold m-2">
            {currentView === 'statement' && statement}
            {currentView === 'question' && (userAnswer || question)}
            {currentView === 'answer' && (
              <span className={userAnswer.toLowerCase() === answer.toLowerCase() ? "text-green-500" : "text-red-500"}>
                {`${userAnswer} ${userAnswer.toLowerCase() === answer.toLowerCase() ? 'es correcto!' : 'es incorrecto!'} ${message}`}
              </span>
            )}
          </h2>
        </div>
      </div>
      
      <div className="flex justify-center items-center m-10">
        <div className={`h-20 w-20 bg-red-400 rounded-full flex justify-center items-center ${listening && 'animate-pulse'}`}>
          <FontAwesomeIcon size='3x' className="cursor-pointer text-white" icon={faMicrophone} onClick={handleMicrophoneClick} />
        </div>
      </div>
      
      {currentView === 'answer' && (
        <button onClick={handleNext} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors rounded-lg font-bold duration-300 ease-in-out">
          Next
        </button>
      )}
    </div>
  );
};

export default Question;