import React, { useState, useMemo, useEffect } from "react";
import Question from "./Question";
import Progress from "./Progress";
import QuizResults from "./QuizResults";
import TopBar from "../../../components/TopBar";
import { useQuizState } from "./QuizState";
import { story1Statements, story1Questions } from "./storydata";

export default function QuizPage({ shuffleQuestions = false }) {
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

  const maxPoints = useMemo(() => {
    return story1Questions.reduce((total, question) => total + (parseInt(question.point, 10) || 0), 0);
  }, []);

  const totalQuestions = story1Questions.length;

  const currentStatement = story1Statements[currentStatementIndex];
  const currentQuestions = useMemo(() => 
    story1Questions.filter(q => q.statementId === currentStatement.id),
    [currentStatement.id]
  );
  const currentQuestion = currentQuestions[currentQuestionIndex];

  const overallQuestionIndex = useMemo(() => {
    return story1Questions.findIndex(q => q.id === currentQuestion.id);
  }, [currentQuestion.id]);

  useEffect(() => {
    if (currentQuestionIndex === 0) {
      setShowStatement(true);
    }
  }, [currentStatementIndex, currentQuestionIndex]);

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
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setShowStatement(false);
    } else if (currentStatementIndex < story1Statements.length - 1) {
      setCurrentStatementIndex(prevIndex => prevIndex + 1);
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
    <div className="bg-purple-500 min-h-screen flex flex-col justify-center items-center">
      <div className="min-h-screen bg-white shadow-lg max-w-lg w-full text-center pb-8">
        <TopBar/>
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