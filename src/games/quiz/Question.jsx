import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Question = ({ questionObj, transcript, selectedAnswer }) => {
  const { question, translation, answer, messageForCorrectAnswer, messageForIncorrectAnswer, explanation } = questionObj;

  const isCorrect = selectedAnswer && selectedAnswer.toLowerCase() === answer.toLowerCase();

  return (
    <div className="my-2">
      <h2 className="text-lg mb-2">{question}</h2>
      <p className="hidden text-lg mb-6">{translation}</p>
      {selectedAnswer && (
        <div className="mt-6">
          <div
            className={`flex gap-2 items-center justify-center my-4 ${
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
    </div>
  );
};


export default Question;
