import TextToSpeech from "../TextToSpeech";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Question = ({questionObj, handleAnswerClick, showNextButton, selectedAnswer}) => {

  const { question, translation, answer, messageForCorrectAnswer, messageForIncorrectAnswer, explanation } = questionObj;

  const isCorrect = selectedAnswer && selectedAnswer.toLowerCase() === answer.toLowerCase();

  return (
    <div className="my-2">
      <h2 className="text-lg mb-2">{question}</h2>
      <TextToSpeech textInput={question} />
      <p className="hidden text-lg mb-6">{translation}</p>
      {selectedAnswer && (
        <div className="mt-6">
          <div
            className={`flex gap-2 items-center justify-center text-lg my-4 ${
              isCorrect ? "text-green-600" : "text-red-600"
            }`}
          >
            {isCorrect ? (
              <FontAwesomeIcon icon={faCheckCircle} />
            ) : (
              <FontAwesomeIcon icon={faTimesCircle} />
            )}
            <p>
              {isCorrect ? messageForCorrectAnswer : messageForIncorrectAnswer}
            </p>
          </div>
          <p className="hidden m-4 text-lg">{explanation}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        <button
          onClick={() => handleAnswerClick(answer)}
          className={`transition-colors duration-300 ease-in-out p-2 rounded text-lg font-medium shadow-md ${
            selectedAnswer === answer
              ? isCorrect
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
              : "bg-blue-500 text-white hover:bg-blue-700"
          }`}
          disabled={selectedAnswer !== null}
        >
          {answer}
        </button>
      </div>

      {showNextButton && (
        <button
          onClick={showNextButton}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 mt-6 transition-colors duration-300 ease-in-out"
        >
          Next Question
        </button>
      )}
    </div>
  );
};

export default Question;
