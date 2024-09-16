import { useMemo, useState } from "react";
import { storydata } from "./storydata";

const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);
export const useQuizState = (shuffleQuestions) => {
  const [currentStatementIndex, setCurrentStatementIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState({ correct: 0 });
  const [totalPoints, setTotalPoints] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [finalTranscript, setFinalTranscript] = useState("");
  const [transcriptLocked, setTranscriptLocked] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [statementPlayed, setStatementPlayed] = useState(false);

  const shuffledStatements = useMemo(() => {
    if (shuffleQuestions) {
      return storydata.statements.map(statement => ({
        ...statement,
        questions: shuffleArray([...statement.questions])
      }));
    }
    return storydata.statements;
  }, [shuffleQuestions]);

  return {
    currentStatementIndex,
    setCurrentStatementIndex,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    score,
    setScore,
    totalPoints,
    setTotalPoints,
    selectedAnswer,
    setSelectedAnswer,
    finalTranscript,
    setFinalTranscript,
    transcriptLocked,
    setTranscriptLocked,
    showNextButton,
    setShowNextButton,
    quizCompleted,
    setQuizCompleted,
    statementPlayed,
    setStatementPlayed,
    shuffledStatements
  };
};