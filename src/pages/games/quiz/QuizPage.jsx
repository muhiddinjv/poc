import React, { useState, useEffect, useMemo } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import Question from "./Question";
import Progress from "./Progress";
import QuizResults from "./QuizResults";
import TopBar from "../../../components/TopBar";
import { useQuizState } from "./QuizState";
import { steps1, storydata } from "./storydata";

export default function QuizPage({ shuffleQuestions = false }){
  const [state, setState] = useState({ run: false, steps: steps1 });
  const quizState = useQuizState(shuffleQuestions);
  const {
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
  } = quizState;

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <div>Browser doesn't support speech recognition.</div>;
  }

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

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    const correctAnswer = currentQuestion.answer;
    const points = parseInt(currentQuestion.point, 10) || 0;

    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
      setScore(prevScore => ({ correct: prevScore.correct + 1 }));
      setTotalPoints(prevPoints => prevPoints + points);
    }

    setShowNextButton(true);
    setTranscriptLocked(true);
  };

  useEffect(() => {
    const quizTourCompleted = localStorage.getItem('quizTourCompleted');
    
    if (!quizTourCompleted) {
      setState((prevState) => ({ ...prevState, run: true }));
    }

    if (transcript && !transcriptLocked) {
      const trimmedTranscript = transcript.trim();
      setFinalTranscript(trimmedTranscript);
      handleAnswerClick(trimmedTranscript);
    }
  }, [transcript, transcriptLocked]);

  const handleJoyrideCallback = (data) => {
    const { status } = data;

    if (status === 'finished' || status === 'skipped') {
      localStorage.setItem('quizTourCompleted', 'true');
      setState((prevState) => ({ ...prevState, run: false }));
    }
  };

  const handleNextQuestion = () => {
    setShowNextButton(false);
    setSelectedAnswer(null);
    setFinalTranscript(""); 
    setTranscriptLocked(false); 
    resetTranscript();

    if (currentQuestionIndex < currentStatement.questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else if (currentStatementIndex < shuffledStatements.length - 1) {
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
  };

  const startStopListening = () => {
    listening ? SpeechRecognition.stopListening() : SpeechRecognition.startListening({ language: 'es-US'});
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

  const restartTour = () => {
    setState((prevState) => ({ ...prevState, run: true }));
  };

  const currentQuestionNumber = shuffledStatements.slice(0, currentStatementIndex).reduce((total, statement) => total + statement.questions.length, 0) + currentQuestionIndex + 1;

  return (
    <div className="bg-purple-500 min-h-screen flex flex-col justify-center items-center">
      <div className="min-h-screen bg-white shadow-lg max-w-lg w-full text-center pb-8">
        <TopBar restartTour={restartTour}/>
        <Progress current={currentQuestionNumber} total={totalQuestions} />
        <Question
          state={state}
          setState={setState}
          listening={listening}
          transcript={finalTranscript}
          questionObj={currentQuestion}
          selectedAnswer={selectedAnswer}
          statementPlayed={statementPlayed}
          startStopListening={startStopListening}
          statement={currentStatement.statement}
          image={currentStatement.image}
          setStatementPlayed={setStatementPlayed}
        />        
        {showNextButton && (
          <button onClick={handleNextQuestion} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors rounded-lg font-bold duration-300 ease-in-out">
            Next Question
          </button>
        )}
      </div>
    </div>
  );
};