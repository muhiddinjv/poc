import React, { useCallback } from "react";
import { useSpeechRecognition } from "react-speech-recognition";
import TopBar from "../../components/TopBar";
import Progress from "../../pages/games/quiz/Progress";
import Question from "../../pages/games/quiz/Question";
import QuizResults from "../../pages/games/quiz/QuizResults";
import JoyRide from "./JoyRide";
import Statement from "./Statement";
import useQuizState from "./useQuizState";

const Quiz = ({ shuffleQuestions = false }) => {
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const {
    currentStatementIndex,
    currentQuestionIndex,
    score,
    totalPoints,
    selectedAnswer,
    finalTranscript,
    transcriptLocked,
    showNextButton,
    quizCompleted,
    shuffledStatements,
    maxPoints,
    totalQuestions,
    currentStatement,
    currentQuestion,
    handleAnswerClick,
    handleNextQuestion,
    handleTryAgain,
    startStopListening,
  } = useQuizState(transcript, listening, resetTranscript, shuffleQuestions);

  const handleTourCompletion = useCallback(() => {
    localStorage.setItem("quizTourCompleted", "true");
  }, []);

  if (!browserSupportsSpeechRecognition) {
    return <div>Browser doesn't support speech recognition.</div>;
  }

  if (quizCompleted) {
    return (
      <QuizResults
        score={score}
        totalQuestions={totalQuestions}
        totalPoints={totalPoints}
        maxPoints={maxPoints}
        handleTryAgain={handleTryAgain}
      />
    );
  }

  const currentQuestionNumber = shuffledStatements.slice(0, currentStatementIndex).reduce(
    (total, statement) => total + statement.questions.length, 0) + currentQuestionIndex + 1;

  return (
    <div className="bg-purple-500 min-h-screen flex flex-col justify-center items-center">
      <div className="min-h-screen bg-white shadow-lg max-w-lg w-full text-center pb-8">
        <JoyRide onTourCompletion={handleTourCompletion} />
        <TopBar />
        <Progress current={currentQuestionNumber} total={totalQuestions} />
        <Statement statement={currentStatement} />
        <Question
          listening={listening}
          transcript={finalTranscript}
          questionObj={currentQuestion}
          selectedAnswer={selectedAnswer}
          startStopListening={startStopListening}
        />
        {showNextButton && (
          <button onClick={handleNextQuestion} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
            Next Question
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
