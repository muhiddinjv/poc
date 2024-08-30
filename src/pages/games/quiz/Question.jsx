import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faVolumeMute, faMicrophone, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';

const Question = ({ questionObj, selectedAnswer, transcript, listening, startStopListening, statementPlayed }) => {
  const { question, question_audio, messageAudio, answer, messageForAnswer } = questionObj;
  const [messageForAnswerVisible, setMessageForAnswerVisible] = useState(false);
  const [questionVisible, setQuestionVisible] = useState(false);

  const isCorrect = selectedAnswer && selectedAnswer.toLowerCase() === answer.toLowerCase();

  useEffect(() => {
    if (transcript) {
      setMessageForAnswerVisible(true);
    }
  }, [transcript]);

  const playQuestionAudio = () => {
    if(statementPlayed){
      const audio = new Audio(question_audio);
      audio.play();
    }
  }

  const toggleQuestionVisibility = () => {
    if(statementPlayed){
      setQuestionVisible(!questionVisible);
    }
  }

  const playAnswerAudio = () => {
    if(transcript){
      const audio = new Audio(messageAudio);
      audio.play();
    }
  }

  const toggleMessageForAnswerVisibility = () => {
    setMessageForAnswerVisible(!messageForAnswerVisible);
  }

  return (
    <div className="relative mt-4">
      <div className='flex gap-6 justify-center text-lg'>
        {questionVisible && (
          <div onClick={toggleQuestionVisibility} className="absolute top-0 left-1/2 -translate-x-1/2 bg-purple-500 text-white p-2 rounded shadow-2xl">
            <p className="">{question}</p>
          </div>
        )}
        <div className="flex gap-2 items-center justify-center">
          <FontAwesomeIcon icon={statementPlayed ? faVolumeUp : faVolumeMute} onClick={playQuestionAudio} className={`cursor-pointer text-white p-3 rounded-lg ${statementPlayed ? 'bg-blue-500' : 'bg-gray-500'}`}/>
          <FontAwesomeIcon icon={statementPlayed ? faEye : faEyeSlash} onClick={toggleQuestionVisibility} className={`cursor-pointer text-white p-3 rounded-lg ${statementPlayed ? 'bg-blue-500' : 'bg-gray-500'}`}/>
        </div>
        {(transcript && messageForAnswerVisible) && (
          <div onClick={toggleMessageForAnswerVisibility}
            className={`absolute top-0 left-1/2 -translate-x-1/2 text-white rounded shadow-2xl px-4 py-2 flex gap-2 items-center justify-center ${
              isCorrect ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {isCorrect ? `${transcript} es correcto! ${messageForAnswer}` : `${transcript} es incorrecto! ${messageForAnswer}`}
          </div>
        )}
        <div className={`flex gap-2 items-center justify-center`}>
          <FontAwesomeIcon icon={transcript ? faVolumeUp : faVolumeMute} onClick={playAnswerAudio} className={`cursor-pointer text-white p-3 rounded-lg ${transcript ? 'bg-pink-500' : 'bg-gray-500'}`}/>
          <FontAwesomeIcon icon={transcript ? faEye : faEyeSlash} onClick={toggleMessageForAnswerVisibility} className={`cursor-pointer text-white p-3 rounded-lg ${transcript ? 'bg-pink-500' : 'bg-gray-500'}`}/>
        </div>
      </div>
      <div className="flex justify-center items-center m-10">
        <div className={`h-20 w-20 bg-red-400 rounded-full flex justify-center items-center ${listening && 'animation-pulse'}`}>
          <FontAwesomeIcon size='3x' className="cursor-pointer text-white" icon={faMicrophone} onClick={startStopListening} />
        </div>
      </div>
    </div>
  );
};


export default Question;