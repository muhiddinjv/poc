import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, faVolumeHigh, faMicrophone, faMicrophoneSlash, faMicrophoneAlt, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { useCallback } from 'react';

const Question = ({ questionObj, selectedAnswer, transcript, isListening, startStopListening }) => {
  const { question, question_audio, translation, answer, messageForAnswer, explanation } = questionObj;

  const isCorrect = selectedAnswer && selectedAnswer.toLowerCase() === answer.toLowerCase();

  const playQuestionAudio = useCallback(() => {
    const audio = new Audio(question_audio);
    audio.play();
  }, [question_audio]);

  return (
    <div className="my-2">
      <div className='flex gap-2 items-center justify-center'>
        <FontAwesomeIcon icon={faVolumeHigh} onClick={playQuestionAudio} className='cursor-pointer'/>
        <h2 className="">{question}</h2>
      </div>
      <p className='m-2 capitalize'>{transcript}</p>
      <p className="hidden text-lg mb-6">{translation}</p>
      {selectedAnswer && (
        <div className="mt-4">
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
          <p className="hidden m-4 text-lg">{explanation}</p>
        </div>
      )}
      <div className="flex justify-center items-center">
        <div className={`h-16 w-16 bg-red-400 rounded-full flex justify-center items-center ${isListening && 'animation-pulse'}`}>
          <FontAwesomeIcon size='2x' className="cursor-pointer text-white" icon={faMicrophone} onClick={startStopListening} />
        </div>
      </div>

      {/* <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col items-center p-4">
        <div className="h-screen bg-white shadow-lg max-w-lg w-full rounded-lg p-4">
          <div className="flex justify-center items-center border-b pb-4 mb-4">
            <div className="space-x-2">
              <button className="py-1 px-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full text-white font-bold shadow-lg hover:from-blue-500 hover:to-blue-700">Quiz</button>
              <button className="py-1 px-3 bg-gradient-to-r from-green-400 to-green-600 rounded-full text-white font-bold shadow-lg hover:from-green-500 hover:to-green-700">Gapfil</button>
              <button className="py-1 px-3 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full text-white font-bold shadow-lg hover:from-yellow-500 hover:to-yellow-700">Number</button>
              <button className="py-1 px-3 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full text-white font-bold shadow-lg hover:from-pink-500 hover:to-pink-700">Reorder</button>
              <button className="py-1 px-3 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full text-white font-bold shadow-lg hover:from-purple-500 hover:to-purple-700">Retell</button>
            </div>
          </div>

          <h1 className="text-3xl font-extrabold text-white mb-6 text-center">STORIES</h1>
          
          <div className="relative">
            <img src="your-image-src-here" alt="story visual" className="w-full h-72 object-cover rounded-lg shadow-lg border-4 border-gradient-to-r from-yellow-500 via-red-500 to-pink-500" />
            <p className="absolute bottom-4 left-4 bg-white bg-opacity-75 text-xl font-semibold text-black p-2 rounded-lg">There is a headless horseman</p>
          </div>

          <div className="mt-4">
            <p className="text-white text-lg mb-4"><FontAwesomeIcon icon={faVolumeUp} /> Is there a horseman? Yes or no?</p>
            <p className="text-lg bg-white text-black font-bold p-2 rounded-lg shadow-lg">Yes</p>

            <div className="mt-6 text-center">
              <div className="flex justify-center items-center text-lg my-4 text-green-600 font-bold">
                <FontAwesomeIcon icon={faCheckCircle} size="2x" />
                <p className="ml-2">Correct! There is a horseman</p>
              </div>
              <button className="bg-gradient-to-r from-red-400 to-pink-500 text-white px-4 py-2 rounded-full shadow-lg hover:from-red-500 hover:to-pink-600 transition-all duration-300 ease-in-out">
                Next Question
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};


export default Question;
