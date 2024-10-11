import React, { useState, useMemo, useEffect } from "react";
import Question from "./Question";
import Progress from "./Progress";
import QuizResults from "./QuizResults";
import TopBar from "../../../components/TopBar";
import { useQuizState } from "./QuizState";
import { lessons, statements, questions } from "../../../data";
import { useParams } from "react-router-dom";

export default function QuizPage({ shuffleQuestions = false }) {
  const { lessonId } = useParams();
  
  // Find the lesson by id
  const { statementIds } = lessons.find(
    (lesson) => lesson.id === parseInt(lessonId, 10)
  );

  // Filter statements and questions based on the lesson's statementIds
  const filteredStatements = statements.filter((statement) => statementIds.includes(statement.id));
  const filteredQuestions = questions.filter((question) => statementIds.includes(question.statementId));

  const quizState = useQuizState(shuffleQuestions);
  const {
    score,
    setScore,
    totalPoints,
    setTotalPoints,
    selectedAnswer,
    setSelectedAnswer,
    quizCompleted,
    setQuizCompleted,
    currentStatementIndex,
    setCurrentStatementIndex,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    transcriptLocked,
    setTranscriptLocked
  } = quizState;

  const [showStatement, setShowStatement] = useState(true);

  // Calculate total points for the lesson
  const maxPoints = useMemo(() => {
    return filteredQuestions.reduce((total, question) => total + (parseInt(question.point, 10) || 0), 0);
  }, [filteredQuestions]);

  const totalQuestions = filteredQuestions.length;

  // Get the current statement and questions for the current statement
  const currentStatement = filteredStatements[currentStatementIndex];
  const currentQuestions = useMemo(() => 
    filteredQuestions.filter(q => q.statementId === currentStatement.id),
    [currentStatement.id, filteredQuestions]
  );
  const currentQuestion = currentQuestions[currentQuestionIndex];

  // Overall question index for progress
  const overallQuestionIndex = useMemo(() => {
    return filteredQuestions.findIndex(q => q.id === currentQuestion.id);
  }, [currentQuestion.id, filteredQuestions]);

  useEffect(() => {
    if (currentQuestionIndex === 0) {
      setShowStatement(true);
    }
  }, [currentStatementIndex, currentQuestionIndex]);

  const handleQuestionAnswered = (answer) => {
    setSelectedAnswer(answer);
    const correctAnswer = currentQuestion.answer.es;
    const points = parseInt(currentQuestion.point, 10) || 0;

    if (answer.toLowerCase().trim() === correctAnswer.toLowerCase().trim()) {
      setScore((prevScore) => ({ correct: prevScore.correct + 1 }));
      setTotalPoints((prevPoints) => prevPoints + points);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setShowStatement(false);
    } else if (currentStatementIndex < filteredStatements.length - 1) {
      setCurrentStatementIndex((prevIndex) => prevIndex + 1);
      setCurrentQuestionIndex(0);
      setShowStatement(true);
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
    setShowStatement(true);
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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-500">
      <div className="w-full max-w-lg min-h-screen pb-8 text-center bg-white shadow-lg">
        <TopBar />
        <Progress current={overallQuestionIndex + 1} total={totalQuestions} />
        <Question
          statementObj={currentStatement}
          questionObj={currentQuestion}
          selectedAnswer={selectedAnswer}
          simage={currentStatement.image}
          qimage={currentQuestion.image}
          onNextQuestion={handleNextQuestion}
          onQuestionAnswered={handleQuestionAnswered}
          showStatement={showStatement}
          setShowStatement={setShowStatement}
          transcriptLocked={transcriptLocked}
          setTranscriptLocked={setTranscriptLocked}
        />
      </div>
    </div>
  );
}
