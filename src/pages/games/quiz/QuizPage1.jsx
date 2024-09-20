import React, { useState, useEffect, useMemo } from "react";
import Question from "./Question1";
import Progress from "./Progress";
import QuizResults from "./QuizResults";
import TopBar from "../../../components/TopBar";
import { useQuizState } from "./QuizState";
import { steps1, storydata } from "./storydata";

export default function QuizPage({ shuffleQuestions = false }) {
  const [state, setState] = useState({ run: false, steps: steps1 });
  const quizState = useQuizState(shuffleQuestions);
  const {
    currentStatementIndex,
    setCurrentStatementIndex,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    selectedAnswer,
    setSelectedAnswer,
    score,
    setScore,
    totalPoints,
    setTotalPoints,
    quizCompleted,
    setQuizCompleted,
    shuffledStatements
  } = quizState;

  const [showStatement, setShowStatement] = useState(true);
  const [statementPlayed, setStatementPlayed] = useState(false);

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
  const currentQuestion = currentStatement.questions[currentQuestionIndex];

  const handleQuestionAnswered = (answer) => {
    setSelectedAnswer(answer);
    const correctAnswer = currentQuestion.answer;
    const points = parseInt(currentQuestion.point, 10) || 0;

    if (answer.toLowerCase().trim() === correctAnswer.toLowerCase().trim()) {
      setScore(prevScore => ({ correct: prevScore.correct + 1 }));
      setTotalPoints(prevPoints => prevPoints + points);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    if (currentQuestionIndex < currentStatement.questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      if (currentStatementIndex < shuffledStatements.length - 1) {
        setCurrentStatementIndex(prevIndex => prevIndex + 1);
        setCurrentQuestionIndex(0);
        setShowStatement(true);
        setStatementPlayed(false);
      } else {
        setQuizCompleted(true);
      }
    }
  };

  const handleStatementPlayed = () => {
    setStatementPlayed(true);
  };

  const handleTryAgain = () => {
    setCurrentStatementIndex(0);
    setCurrentQuestionIndex(0);
    setScore({ correct: 0 });
    setTotalPoints(0);
    setQuizCompleted(false);
    setShowStatement(true);
    setStatementPlayed(false);
  };

  const handleJoyrideCallback = (data) => {
    const { status } = data;
    if (status === 'finished' || status === 'skipped') {
      localStorage.setItem('quizTourCompleted', 'true');
      setState((prevState) => ({ ...prevState, run: false }));
    }
  };

  const restartTour = () => {
    setState((prevState) => ({ ...prevState, run: true }));
  };

  useEffect(() => {
    const quizTourCompleted = localStorage.getItem('quizTourCompleted');
    if (!quizTourCompleted) {
      setState((prevState) => ({ ...prevState, run: true }));
    }
  }, []);

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
        <TopBar restartTour={restartTour}/>
        <Progress current={currentQuestionNumber} total={totalQuestions} />
        <Question
          statement={currentStatement.statement}
          questionObj={currentQuestion}
          selectedAnswer={selectedAnswer}
          image={currentStatement.image}
          onNextQuestion={handleNextQuestion}
          onQuestionAnswered={handleQuestionAnswered}
          showStatement={showStatement}
          statementPlayed={statementPlayed}
          onStatementPlayed={handleStatementPlayed}
        />
      </div>
    </div>
  );
}