import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, faVolumeHigh, faMicrophone, faEye } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useEffect, useState } from 'react';

const Question = ({ questionObj, selectedAnswer, transcript, isListening, startStopListening }) => {
  const { question, question_audio, translation, answer, messageForAnswer, explanation } = questionObj;
  const [questionVisible, setQuestionVisible] = useState(false);
  const [ messageVisible, setMessageVisible ] = useState(false);
  const [messageForAnswerVisible, setMessageForAnswerVisible] = useState(false);
  const [transcriptVisible, setTranscriptVisible] = useState(false);
  const isCorrect = selectedAnswer && selectedAnswer.toLowerCase() === answer.toLowerCase();

  console.log({transcript})

  const playQuestionAudio = useCallback(() => {
    const audio = new Audio(question_audio);
    audio.play();
  }, [question_audio]);

  const seeQuestion = () => {
    setQuestionVisible(!questionVisible);
  }

  const seeTranscript = () => {
    setTranscriptVisible(!transcriptVisible);
  }

  const seeMessageForAnswer = () => {
    setMessageForAnswerVisible(!messageForAnswerVisible);
  }


  return (
    <div className="relative mt-4">
      <div className='flex gap-4 justify-center text-lg'>
        {questionVisible && (
          <div onClick={seeQuestion} className="absolute top-0 left-1/2 -translate-x-1/2 bg-purple-500 text-white p-2 rounded shadow-2xl">
            <p className="">{question}</p>
          </div>
        )}
        <div className='flex gap-6 items-center justify-center bg-blue-500 text-white p-3 rounded-lg'>
          <FontAwesomeIcon icon={faVolumeHigh} onClick={playQuestionAudio} className='cursor-pointer'/>
          <FontAwesomeIcon icon={faEye} onClick={seeQuestion} className='cursor-pointer'/>
        </div>
        {(selectedAnswer && messageForAnswerVisible) && (
          <div onClick={seeMessageForAnswer}
            className={`absolute top-0 left-1/2 -translate-x-1/2 text-white rounded shadow-2xl px-4 py-2 flex gap-2 items-center justify-center ${
              isCorrect ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {isCorrect ? `${transcript} is correct! ${messageForAnswer}` : `${transcript} is inorrect! ${messageForAnswer}`}
          </div>
        )}
        <div className={`flex gap-6 items-center justify-center ${transcript ? 'bg-pink-500' : 'bg-gray-500'} text-white p-3 rounded-lg`}>
          <FontAwesomeIcon icon={faVolumeHigh} onClick={()=>{}} className='cursor-pointer'/>
          <FontAwesomeIcon icon={faEye} onClick={seeMessageForAnswer} className='cursor-pointer'/>
        </div>
      </div>
      <div className="flex justify-center items-center m-10">
        <div className={`h-20 w-20 bg-red-400 rounded-full flex justify-center items-center ${isListening && 'animation-pulse'}`}>
          <FontAwesomeIcon size='3x' className="cursor-pointer text-white" icon={faMicrophone} onClick={startStopListening} />
        </div>
      </div>
    </div>
  );
};


export default Question;
