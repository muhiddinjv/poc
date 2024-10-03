import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faEye, faEyeSlash, faMicrophoneSlash, faVolumeUp, faVolumeMute, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { list } from 'postcss';

const Question = ({ 
  simage,
  qimage,
  questionObj,
  statementObj,
  showStatement,
  onNextQuestion,
  selectedAnswer,
  setShowStatement,
  onQuestionAnswered,
  transcriptLocked,
  setTranscriptLocked
}) => {
  const [currentView, setCurrentView] = useState(showStatement ? 'statement' : 'question');
  const [shouldStartListening, setShouldStartListening] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [textVisible, setTextVisible] = useState(true);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const { question, answer, feedback, qtranslation } = questionObj;
  const { statement, stranslation } = statementObj;

  const isCorrect = selectedAnswer && selectedAnswer.toLowerCase() === answer.toLowerCase();

  useEffect(() => {
    setCurrentView(showStatement ? 'statement' : 'question');
  }, [showStatement]);

  useEffect(() => {
    if (transcript && currentView === 'question' && !transcriptLocked) {
      const cleanTranscript = transcript.toLowerCase().replace(/[.]/g, "").trim();
      setUserAnswer(cleanTranscript);
    }
  }, [transcript, currentView, transcriptLocked]);

  useEffect(() => {
    if (shouldStartListening && !isPlaying) {
      SpeechRecognition.startListening({ continuous: true, language: 'es-US' });//ar-AE
      setShouldStartListening(false);
    }
  }, [shouldStartListening, isPlaying]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Your browser does not support speech recognition! Try MS Edge, maybe?</span>;
  }

  const speak = (text) => {
    setIsPlaying(true);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-US';
    utterance.rate = 0.8;
    utterance.onend = () => {
      setIsPlaying(false);
      if (currentView === 'statement') {
        setCurrentView('question');
        setShowStatement(false);
      }
      if (currentView === 'question') {
        setShouldStartListening(true);
      }
    };
    speechSynthesis.speak(utterance);
  };

  const handlePlay = () => {
    if (currentView === 'statement') {
      speak(statement);
    } else if (currentView === 'question') { 
      speak(question);
    } else if (currentView === 'answer') {
      speak(`${isCorrect ? `${userAnswer} es correcto! ${feedback}` : `${userAnswer} es incorrecto! ${feedback}`}`);
    }
  };

  const handleMicrophoneClick = () => {
    if (listening) {
      SpeechRecognition.stopListening();
      setTranscriptLocked(true);
      onQuestionAnswered(userAnswer);
      setCurrentView('answer');
    } else if (!isPlaying) {
      SpeechRecognition.startListening({ continuous: true, language: 'es-US' });//continuous: true,
      setTranscriptLocked(false);
    }
  };

  const handleNext = () => {
    onNextQuestion();
    resetTranscript();
    setUserAnswer('');
    setCurrentView(showStatement ? 'statement' : 'question');
    setTranscriptLocked(false);
  };
  
  return (
    <>
      <div className="flex flex-col items-center pb-2 bg-gray-50 border-b min-h-80">
        <img src={currentView === 'statement' ? simage : qimage} alt="question visual" className="h-72 max-w-72 rounded" />
        <span className={`${!textVisible && 'invisible'}`}>
          <h2 className="text-lg font-semibold m-2 text-blue-700 max-w-72">
            {currentView === 'statement' && statement}
            {currentView === 'question' && (userAnswer || question)}
            {currentView === 'answer' && (
              <span className={isCorrect ? "text-green-500" : "text-red-500"}>
                {`${userAnswer} ${isCorrect ? 'es correcto!' : 'es incorrecto!'} ${feedback}`}
              </span>
            )}
          </h2>
          {currentView === 'statement' && <p className="text-sm text-gray-500">{stranslation}</p>}
          {currentView === 'question' && <p className="text-sm text-gray-500">{qtranslation}</p>}
        </span>
      </div>
      <div className='flex items-center justify-center mt-6'>
        <FontAwesomeIcon 
          onClick={handlePlay}
          icon={isPlaying || listening ? faVolumeMute : faVolumeUp} 
          className={`${isPlaying | listening && 'text-gray-400 pointer-events-none'} cursor-pointer rounded-full text-blue-500 mr-6 text-4xl`}
        />
        <FontAwesomeIcon 
          onClick={()=> setTextVisible(!textVisible)}
          icon={!textVisible ? faEyeSlash : faEye} 
          className="cursor-pointer rounded-full text-blue-500 mr-6 text-4xl"
        />
        <FontAwesomeIcon 
          onClick={handleNext}
          icon={faCircleArrowRight} 
          className={`${currentView === 'answer' ? 'text-blue-500': 'text-gray-400 pointer-events-none'} text-4xl cursor-pointer`}
        />
      </div>
      <div className="flex justify-center items-center m-10">
        <div className={`h-20 w-20 ${listening ? 'bg-red-400':'bg-gray-400'} rounded-full flex justify-center items-center ${listening && 'animate-pulse'}`}>
          <FontAwesomeIcon size='3x' className="cursor-pointer text-white" icon={listening ? faMicrophone : faMicrophoneSlash} onClick={handleMicrophoneClick} />
        </div>
      </div>
    </>
  );
};

export default Question;