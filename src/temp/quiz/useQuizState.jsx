import { useState, useMemo, useCallback } from "react";
import { storydata } from "../../pages/games/quiz/storydata";
import SpeechRecognition from "react-speech-recognition";

const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

const useQuizState = (transcript, resetTranscript, shuffleQuestions, listening) => {
  const [currentStatementIndex, setCurrentStatementIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState({ correct: 0 });
  const [totalPoints, setTotalPoints] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [finalTranscript, setFinalTranscript] = useState("");
  const [transcriptLocked, setTranscriptLocked] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const shuffledStatements = useMemo(() => {
    return shuffleQuestions ? storydata.statements.map(statement => ({
      ...statement,
      questions: shuffleArray([...statement.questions])
    })) : storydata.statements;
  }, [shuffleQuestions]);

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

  const currentStatement = shuffledStatements[currentStatementIndex];
  const currentQuestion = useMemo(() => currentStatement.questions[currentQuestionIndex], [
    currentStatement,
    currentQuestionIndex,
  ]);

  const handleAnswerClick = useCallback(
    (answer) => {
      setSelectedAnswer(answer);
      const correctAnswer = currentQuestion.answer;
      const points = parseInt(currentQuestion.point, 10) || 0;

      if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
        setScore((prevScore) => ({ correct: prevScore.correct + 1 }));
        setTotalPoints((prevPoints) => prevPoints + points);
      }

      setShowNextButton(true);
      setTranscriptLocked(true);
    },
    [currentQuestion]
  );

  const handleNextQuestion = useCallback(() => {
    setShowNextButton(false);
    setSelectedAnswer(null);
    setFinalTranscript("");
    setTranscriptLocked(false);
    resetTranscript();

    if (currentQuestionIndex < currentStatement.questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else if (currentStatementIndex < shuffledStatements.length - 1) {
      setCurrentStatementIndex((prevIndex) => prevIndex + 1);
      setCurrentQuestionIndex(0);
    } else {
      setQuizCompleted(true);
    }
  }, [currentQuestionIndex, currentStatementIndex, currentStatement.questions.length, shuffledStatements.length, resetTranscript]);

  const handleTryAgain = useCallback(() => {
    setCurrentStatementIndex(0);
    setCurrentQuestionIndex(0);
    setScore({ correct: 0 });
    setTotalPoints(0);
    setQuizCompleted(false);
  }, []);

  const startStopListening = () => {
    listening ? SpeechRecognition.stopListening() : SpeechRecognition.startListening({ language: "es-US",   interimResults: true });
  };

  return {
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
  };
};

export default useQuizState;
