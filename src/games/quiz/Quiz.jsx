import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useSpeechToText } from "../../hooks";
import Question from "./Question";
import ProgressBar from "./ProgressBar";
import QuizResults from "./QuizResults";
import { storydata } from "./storydata";
import TopBar from "../../components/TopBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

const Quiz = ({ shuffleQuestions = false }) => {
  const [currentStatementIndex, setCurrentStatementIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState({ correct: 0 });
  const [totalPoints, setTotalPoints] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [finalTranscript, setFinalTranscript] = useState("");  // Final transcript state
  const [transcriptLocked, setTranscriptLocked] = useState(false);  // Lock the transcript after finalization
  const [showNextButton, setShowNextButton] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [statementPlayed, setStatementPlayed] = useState(false);
  const { transcript, isListening, startListening, stopListening } = useSpeechToText({ continuous: false });

  const maxPoints = useMemo(() => {
    return storydata.statements.reduce(
      (total, statement) =>
        total + statement.questions.reduce((qTotal, question) => qTotal + (parseInt(question.point, 10) || 0), 0),
      0
    );
  }, []);

  const totalQuestions = useMemo(() => {
    return storydata.statements.reduce((total, statement) => total + statement.questions.length, 0);
  }, []);

  const shuffledStatements = useMemo(() => {
    if (shuffleQuestions) {
      return storydata.statements.map(statement => ({
        ...statement,
        questions: shuffleArray([...statement.questions])
      }));
    }
    return storydata.statements;
  }, [shuffleQuestions]);

  const currentStatement = shuffledStatements[currentStatementIndex];
  const currentQuestion = useMemo(() => currentStatement.questions[currentQuestionIndex], [currentStatement, currentQuestionIndex]);

  const handleAnswerClick = useCallback((answer) => {
    setSelectedAnswer(answer);
    const correctAnswer = currentQuestion.answer;
    const points = parseInt(currentQuestion.point, 10) || 0;

    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
      setScore(prevScore => ({ correct: prevScore.correct + 1 }));
      setTotalPoints(prevPoints => prevPoints + points);
    }

    setShowNextButton(true);
    setTranscriptLocked(true);  // Lock the transcript to prevent further updates
  }, [currentQuestion]);

  useEffect(() => {
    if (transcript && !transcriptLocked) {
      const trimmedTranscript = transcript.trim();
      setFinalTranscript(trimmedTranscript);
      handleAnswerClick(trimmedTranscript);
    }
  }, [transcript, transcriptLocked, handleAnswerClick]);

  const handleNextQuestion = useCallback(() => {
    setShowNextButton(false);
    setSelectedAnswer(null);
    setFinalTranscript(""); // Clear the final transcript on next question
    setTranscriptLocked(false); // Unlock the transcript for the next question

    if (currentQuestionIndex < currentStatement.questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else if (currentStatementIndex < shuffledStatements.length - 1) {
      setCurrentStatementIndex(prevIndex => prevIndex + 1);
      setCurrentQuestionIndex(0);
    } else {
      setQuizCompleted(true);
    }
  }, [currentQuestionIndex, currentStatementIndex, currentStatement.questions.length, shuffledStatements.length]);

  const handleTryAgain = useCallback(() => {
    setCurrentStatementIndex(0);
    setCurrentQuestionIndex(0);
    setScore({ correct: 0 });
    setTotalPoints(0);
    setQuizCompleted(false);
  }, []);

  const playStatementAudio = useCallback(() => {
    const audio = new Audio(currentStatement.statement_audio);
    audio.play();
    setStatementPlayed(true);
  }, [currentStatement]);

  const startStopListening = useCallback(() => {
    isListening ? stopListening() : startListening();
  }, [isListening, stopListening, startListening]);

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

  const currentQuestionNumber = shuffledStatements.slice(0, currentStatementIndex).reduce((total, statement) => total + statement.questions.length, 0) + currentQuestionIndex + 1;

  return (
    <div className="bg-purple-500 min-h-screen flex flex-col justify-center items-center">
      <div className="min-h-screen bg-white shadow-lg max-w-lg w-full text-center pb-8">
        <TopBar />
        <div className="hidden">
          <h2 className="text-lg mb-2">
            Statement {currentStatementIndex + 1}/{shuffledStatements.length}, Question {currentQuestionNumber}/{totalQuestions}
          </h2>
          <h1 className="text-xl font-bold my-4">{storydata.quizTitle}</h1>
        </div>
        <div className="flex flex-col items-center py-2 bg-gray-50 border-b">
          <ProgressBar current={currentQuestionNumber} total={totalQuestions} />
          {currentStatement.image && (
            <img src={currentStatement.image} alt="statement visual" className="max-w-72 h-72 rounded" />
          )}
          <div className="flex items-center text-blue-800">
            <FontAwesomeIcon size="lg" icon={faVolumeUp} onClick={playStatementAudio} className={`cursor-pointer p-1 rounded-full ${!statementPlayed && 'animation-pulse'}`}/>
            <h2 className="text-lg font-semibold m-2">{currentStatement.statement}</h2>
          </div>
        </div>
        <Question
          questionObj={currentQuestion}
          transcript={finalTranscript} // Display final transcript
          selectedAnswer={selectedAnswer}
          isListening={isListening}
          startStopListening={startStopListening}
          statementPlayed={statementPlayed}
        />        
        {showNextButton && (
          <button onClick={handleNextQuestion} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors rounded-lg font-bold duration-300 ease-in-out">
            Keyingi Savol
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;


