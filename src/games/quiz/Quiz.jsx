import React, { useState, useEffect, useCallback } from "react";
import { useSpeechToText } from "../../hooks";
import Question from "./Question";
import ProgressBar from "./ProgressBar";
import QuizResults from "./QuizResults";
import { storydata } from "./storydata";
import TopBar from "../../components/TopBar";

const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

const Quiz = ({ shuffleQuestions = false }) => {
  const [currentStatementIndex, setCurrentStatementIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState({ correct: 0 });
  const [totalPoints, setTotalPoints] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizStatements, setQuizStatements] = useState(storydata.statements);
  const { transcript, isListening, startListening, stopListening } = useSpeechToText();

  const startStopListening = useCallback(() => {
    isListening ? stopListening() : startListening();
  }, [isListening, stopListening, startListening]);

  const maxPoints = storydata.statements.reduce(
    (total, statement) =>
      total + statement.questions.reduce((qTotal, question) => qTotal + (parseInt(question.point, 10) || 0), 0),
    0
  );

  const totalQuestions = storydata.statements.reduce((total, statement) => total + statement.questions.length, 0);

  useEffect(() => {
    if (shuffleQuestions) {
      const shuffledStatements = storydata.statements.map(statement => ({
        ...statement,
        questions: shuffleArray([...statement.questions])
      }));
      setQuizStatements(shuffledStatements);
    }
  }, [shuffleQuestions, storydata.statements]);

  useEffect(() => {
    if (transcript) {
      handleAnswerClick(transcript.trim());
    }
  }, [transcript]);

  const handleAnswerClick = (selectedAnswer) => {
    setSelectedAnswer(selectedAnswer);
    const correctAnswer = quizStatements[currentStatementIndex].questions[currentQuestionIndex].answer;
    const points = parseInt(quizStatements[currentStatementIndex].questions[currentQuestionIndex].point, 10) || 0;

    if (selectedAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      setScore(prevScore => ({ correct: prevScore.correct + 1 }));
      setTotalPoints(prevPoints => prevPoints + points);
    }

    setShowNextButton(true);
  };

  const handleNextQuestion = () => {
    setShowNextButton(false);
    setSelectedAnswer(null);

    if (currentQuestionIndex < quizStatements[currentStatementIndex].questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else if (currentStatementIndex < quizStatements.length - 1) {
      setCurrentStatementIndex(prevIndex => prevIndex + 1);
      setCurrentQuestionIndex(0);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleTryAgain = () => {
    setCurrentStatementIndex(0);
    setCurrentQuestionIndex(0);
    setScore({ correct: 0 });
    setTotalPoints(0);
    setQuizCompleted(false);
    setQuizStatements(storydata.statements);
  };

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

  const currentStatement = quizStatements[currentStatementIndex];
  const currentQuestion = currentStatement.questions[currentQuestionIndex];

  const currentQuestionNumber = quizStatements.slice(0, currentStatementIndex).reduce((total, statement) => total + statement.questions.length, 0) + currentQuestionIndex + 1;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="min-h-screen bg-white shadow-lg max-w-lg w-full text-center pb-8">
        <TopBar />
        <h2 className="text-lg mb-2 hidden">
          Statement {currentStatementIndex + 1}/{quizStatements.length}, Question {currentQuestionNumber}/{totalQuestions}
        </h2>
        <h1 className="text-xl font-bold my-4">{storydata.quizTitle}</h1>
        <div className="flex flex-col items-center py-2 bg-gray-50">
          <ProgressBar current={currentQuestionNumber} total={totalQuestions} />
            {currentStatement.image && (
              <img src={currentStatement.image} alt="statement visual" className="max-w-72 h-72" />
            )}
          <h2 className="text-lg font-semibold m-2">{currentStatement.statement}</h2>
          <div className="flex space-x-2 justify-center mt-1 mb-2">
            <button onClick={()=>{alert('listening')}} className="bg-gray-300 px-3 py-1 rounded">{isListening ? 'Stop listening' : 'Listen'}</button>
            <button onClick={startStopListening} className="bg-gray-300 px-3 py-1 rounded">{isListening ? 'Stop listening' : 'Answer'}</button>
          </div>
        </div>

        <Question
          questionObj={currentQuestion}
          transcript={transcript}
          selectedAnswer={selectedAnswer}
        />
        <p>{transcript}</p>
        
        {showNextButton && (
          <button
            onClick={handleNextQuestion}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 mt-6 transition-colors duration-300 ease-in-out"
          >
            Next Question
          </button>
        )}
      </div>
    </div>
  );
};
export default Quiz;