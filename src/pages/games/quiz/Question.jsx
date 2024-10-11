import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faEye, faEyeSlash, faMicrophoneSlash, faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

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

  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  const { question, answer, feedback } = questionObj;
  const { statement } = statementObj;

  const isCorrect = selectedAnswer && selectedAnswer.toLowerCase() === answer.es.toLowerCase();

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
      SpeechRecognition.startListening({ continuous: true, language: 'es-US' });
      setShouldStartListening(false);
    }
  }, [shouldStartListening, isPlaying]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Your browser does not support speech recognition! Try MS Edge, maybe?</span>;
  }

  const speak = (text, onEnd) => {
    setIsPlaying(true);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-US';
    utterance.rate = 0.8;
    utterance.onend = () => {
      setIsPlaying(false);
      if (onEnd) onEnd();
    };
    speechSynthesis.speak(utterance);
  };

  const handlePlay = () => {
    if (currentView === 'statement') {
      speak(statement.es, () => { 
        setCurrentView('question');
        setShowStatement(false);
      });
    } else if (currentView === 'question') { 
      speak(question.es, () => setShouldStartListening(true));
    }
  };

  const handleMicrophoneClick = () => {
    if (listening) {
      // Stop listening and lock the transcript to prevent further speech input
      SpeechRecognition.stopListening();
      setTranscriptLocked(true);
      onQuestionAnswered(userAnswer);
      setCurrentView('answer');
      const isCorrect = userAnswer.toLowerCase() === answer.es.toLowerCase();
      // Automatically trigger feedback speech
      const feedbackText = isCorrect ? `${userAnswer} es correcto! ${feedback.es}` : `${userAnswer} es incorrecto! ${feedback.es}`;
      speak(feedbackText, handleNext);  // After feedback speech, move to next question
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
        <span className={`${!textVisible && 'invisible'} max-w-72`}>
          <h2 className="text-lg font-semibold m-2 text-blue-700">
            {currentView === 'statement' && statement.es}
            {currentView === 'question' && (userAnswer || question.es)}
            {currentView === 'answer' && (
              <span className={isCorrect ? "text-green-500" : "text-red-500"}>
                {`${userAnswer} ${isCorrect ? 'es correcto!' : 'es incorrecto!'} ${feedback.es}`}
              </span>
            )}
          </h2>
          {currentView === 'statement' && <p className="text-sm text-gray-500">{statement.en}</p>}
          {currentView === 'question' && <p className="text-sm text-gray-500">{question.en}</p>}
        </span>
      </div>
      <div className='flex items-center justify-center mt-6'>
        <FontAwesomeIcon 
          onClick={handlePlay}
          icon={(isPlaying || listening) ? faVolumeMute : faVolumeUp} 
          className={`${(isPlaying || listening) && 'pointer-events-none'} cursor-pointer rounded-full text-blue-500 mr-6 text-4xl`}
        />
        <FontAwesomeIcon 
          onClick={()=> setTextVisible(!textVisible)}
          icon={!textVisible ? faEyeSlash : faEye} 
          className="cursor-pointer rounded-full text-blue-500 text-4xl"
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
