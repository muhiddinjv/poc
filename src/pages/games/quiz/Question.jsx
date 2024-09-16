import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeMute, faMicrophone, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Speech from "react-text-to-speech";
import Joyride from 'react-joyride';

const SpeechButton = ({ target, text, isEnabled, className }) => (
  isEnabled ? (
    <div id={target} className={`cursor-pointer ${className}`}>
      <Speech
        text={text}
        lang="es-US"
        rate={0.8}
        voiceURI="Microsoft Paloma Online (Natural) - Spanish (United States)"
        stopBtn={false}
      />
    </div>
  ) : (
    <FontAwesomeIcon id={target} icon={faVolumeMute} className={`cursor-pointer ${className}`} />
  )
);

const ToggleVisibilityButton = ({ target, isVisible, onClick, className }) => (
  <FontAwesomeIcon
    id={target}
    icon={isVisible ? faEye : faEyeSlash}
    onClick={onClick}
    className={`cursor-pointer ${className}`}
  />
);

const Question = ({ 
  state,
  setState,
  questionObj, 
  selectedAnswer, 
  transcript, 
  listening, 
  startStopListening, 
  statementPlayed,
  statement,
  image,
  setStatementPlayed
}) => {
  const [messageVisible, setMessageVisible] = useState(false);
  const [questionVisible, setQuestionVisible] = useState(false);
  const { question, answer, message } = questionObj;

  const isCorrect = selectedAnswer && selectedAnswer.toLowerCase() === answer.toLowerCase();

  useEffect(() => {
    if (transcript) {
      setMessageVisible(true);
    }
  }, [transcript]);

  const toggleQuestionVisibility = () => {
    if (statementPlayed) {
      setQuestionVisible(!questionVisible);
    }
  };

  const toggleMessageVisibility = () => {
    setMessageVisible(!messageVisible);
  };

  const handleJoyrideCallback = (data) => {
    const { status } = data;
  
    if (status === 'finished' || status === 'skipped') {
      localStorage.setItem('quizTourCompleted', 'true');
      setState((prevState) => ({ ...prevState, run: false }));
    }
  };

  return (
    <div >
      <Joyride
        continuous
        run={state.run}
        steps={state.steps}
        hideCloseButton
        scrollToFirstStep
        showSkipButton
        showProgress
        callback={handleJoyrideCallback}
        locale={{
          skip: <span className="bg-blue-500 text-white px-3 py-2 rounded">Skip</span>,
          back: <span className="bg-purple-500 text-white px-3 py-2 rounded">Back</span>,
        }}
      />
      <div className="flex flex-col items-center pb-2 bg-gray-50 border-b">
        {image && <img src={image} alt="statement visual" className="max-w-72 h-72 rounded" />}
        <div className="flex items-center text-blue-700">
          <div onClick={() => setStatementPlayed(true)} className="cursor-pointer p-1 rounded-full">
            <SpeechButton target="play-statement" text={statement} isEnabled={true} />
          </div>
          <h2 className="text-lg font-semibold m-2">{statement}</h2>
        </div>
      </div>
      
      <div className='relative flex gap-6 justify-center text-lg mt-6'>
        {questionVisible && (
          <div onClick={toggleQuestionVisibility} className="absolute top-0 left-1/2 -translate-x-1/2 bg-purple-500 text-white p-2 rounded shadow-2xl">
            <p>{question}</p>
          </div>
        )}
        
        <div className="flex gap-2 items-center justify-center">
          <SpeechButton 
            target="play-question"
            text={question} 
            isEnabled={statementPlayed} 
            className={`text-white p-3 rounded-lg ${statementPlayed ? 'bg-blue-500' : 'bg-gray-500'}`}
          />
          <ToggleVisibilityButton 
            target="show-question"
            isVisible={statementPlayed}
            onClick={toggleQuestionVisibility}
            className={`text-white p-3 rounded-lg ${statementPlayed ? 'bg-blue-500' : 'bg-gray-500'}`}
          />
        </div>
        
        {(transcript && messageVisible) && (
          <div onClick={toggleMessageVisibility}
            className={`absolute top-0 left-1/2 -translate-x-1/2 text-white rounded shadow-2xl px-4 py-2 flex gap-2 items-center justify-center ${
              isCorrect ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {isCorrect ? `${transcript} es correcto! ${message}` : `${transcript} es incorrecto! ${message}`}
          </div>
        )}
        
        <div className="flex gap-2 items-center justify-center">
          <SpeechButton 
            target="play-answer"
            text={isCorrect ? `${transcript} es correcto! ${message}` : `${transcript} es incorrecto! ${message}`}
            isEnabled={transcript}
            className={`text-white p-3 rounded-lg ${transcript ? 'bg-pink-500' : 'bg-gray-500'}`}
          />
          <ToggleVisibilityButton 
            target="show-answer"
            isVisible={transcript}
            onClick={toggleMessageVisibility}
            className={`text-white p-3 rounded-lg ${transcript ? 'bg-pink-500' : 'bg-gray-500'}`}
          />
        </div>
      </div>
      
      <div className="flex justify-center items-center m-10">
        <div className={`h-20 w-20 bg-red-400 rounded-full flex justify-center items-center ${listening && 'animation-pulse'}`}>
          <FontAwesomeIcon id="say-answer" size='3x' className="cursor-pointer text-white" icon={faMicrophone} onClick={startStopListening} />
        </div>
      </div>
    </div>
  );
};

export default Question;