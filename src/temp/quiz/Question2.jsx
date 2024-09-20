import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Question = ({ 
  statementObj, 
  onNextStatement,
  onQuestionAnswered,
  selectedAnswer,
  questionObj
}) => {
  if (!statementObj) {
    return <div>Loading...</div>;
  }

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [currentView, setCurrentView] = useState('statement');

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const { statement, image, questions } = statementObj;
  const { question, answer, message } = questionObj;
  const currentQuestion = questions[currentQuestionIndex];

  const isCorrect = selectedAnswer && selectedAnswer.toLowerCase() === answer.toLowerCase();
  console.log(isCorrect)

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
    utterance.onend = () => setIsPlaying(false);
    speechSynthesis.speak(utterance);
  };

  const handleImageClick = () => {
    if (currentView === 'statement') {
      speak(statement);
      setCurrentView('question');
    } else if (currentView === 'question') {
      speak(currentQuestion.question);
      SpeechRecognition.startListening({ continuous: true, language: 'es-US' });
    } else if (currentView === 'answer') {
      speak(`${isCorrect ? `${userAnswer} es correcto! ${message}` : `${userAnswer} es incorrecto! ${message}`}`);
      setShowNextButton(true);
    }
  };

  const handleMicrophoneClick = () => {
    if (listening) {
      SpeechRecognition.stopListening();
      onQuestionAnswered(userAnswer);
      setCurrentView('answer');
    }
  };

  const handleNextClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setCurrentView('question');
    } else {
      onNextStatement();
    }
    setShowNextButton(false);
    setUserAnswer('');
    resetTranscript();
  };

  return (
    <div>
      <div className="flex flex-col items-center pb-2 bg-gray-50 border-b">
        {image && (
          <img 
            src={image} 
            alt="statement visual" 
            className={`max-w-72 h-72 rounded cursor-pointer ${isPlaying ? '' : ''}`}
            onClick={handleImageClick}
          />
        )}
        <div className="flex items-center text-blue-700">
          {currentView === 'statement' && (
            <h2 className="text-lg font-semibold m-2">{statement}</h2>
          )}
          {currentView === 'question' && (
            <h2 className="text-lg font-semibold m-2">{userAnswer || currentQuestion.question}</h2>
          )}
          {currentView === 'answer' && (
            <h2 className="text-lg font-semibold m-2">{`${isCorrect ? `${userAnswer} es correcto! ${message}` : `${userAnswer} es incorrecto! ${message}`}`}</h2>
          )}
        </div>
      </div>
      
      <div className="flex justify-center items-center m-10">
        <div className={`h-20 w-20 bg-red-400 rounded-full flex justify-center items-center ${listening && 'animate-pulse'}`}>
          <FontAwesomeIcon size='3x' className="cursor-pointer text-white" icon={faMicrophone} onClick={handleMicrophoneClick} />
        </div>
      </div>
      
      {showNextButton && (
        <button onClick={handleNextClick} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors rounded-lg font-bold duration-300 ease-in-out">
          Next
        </button>
      )}
    </div>
  );
};

export default Question;