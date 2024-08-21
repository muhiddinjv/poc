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
    <div className="relative">
      <div className='flex gap-2 justify-center text-lg'>
        <div className="">
          {questionVisible && (
            <div onClick={seeQuestion} className="absolute top-0 left-1/2 -translate-x-1/2 bg-purple-500 text-white p-2 rounded shadow-md">
              <p className="">{question}</p>
            </div>
          )}
          <div className='flex gap-6 items-center justify-center bg-blue-500 text-white py-2 px-4 rounded'>
            <FontAwesomeIcon icon={faVolumeHigh} onClick={playQuestionAudio} className='cursor-pointer'/>
            <FontAwesomeIcon icon={faEye} onClick={seeQuestion} className='cursor-pointer'/>
          </div>
        </div>
        <div className="">
          {(selectedAnswer && messageForAnswerVisible) && (
            <div onClick={seeMessageForAnswer} className="absolute top-0 left-1/2 -translate-x-1/2 bg-white text-white px-4 py-2 rounded shadow-lg">
              <div
                className={`flex gap-2 items-center justify-center ${
                  isCorrect ? "text-green-600" : "text-red-600"
                }`}
              >
                {isCorrect ? (
                  <FontAwesomeIcon icon={faCheckCircle} />
                ) : (
                  <FontAwesomeIcon icon={faTimesCircle} />
                )}
                <p>
                  {isCorrect ? 'Correct! ' + messageForAnswer : 'Inorrect! ' + messageForAnswer}
                </p>
              </div>
            </div>
          )}
          <div className={'flex gap-6 items-center justify-center bg-pink-500 text-white py-2 px-4 rounded'}>
            <FontAwesomeIcon icon={faVolumeHigh} onClick={()=>{}} className='cursor-pointer'/>
            <FontAwesomeIcon icon={faEye} onClick={seeMessageForAnswer} className='cursor-pointer'/>
          </div>
        </div>
      </div>
      <p className='m-2 capitalize'>{transcript}</p>
      <div className="flex justify-center items-center m-6">
        <div className={`h-16 w-16 bg-red-400 rounded-full flex justify-center items-center ${isListening && 'animation-pulse'}`}>
          <FontAwesomeIcon size='2x' className="cursor-pointer text-white" icon={faMicrophone} onClick={startStopListening} />
        </div>
      </div>
    </div>
  );
};


export default Question;
