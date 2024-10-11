import React, { useState, useMemo, useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Question from "./Question1";
import Progress from "../../pages/games/quiz/Progress";
import QuizResults from "../../pages/games/quiz/QuizResults";
import TopBar from "../../components/TopBar";
import { useQuizState } from "../../pages/games/quiz/QuizState";
import { story1Statements, story1Questions } from "../../pages/games/quiz/storydata";

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
  const [isPlaying, setIsPlaying] = useState(false);
  const [shouldStartListening, setShouldStartListening] = useState(false);
  const [noAnswerCount, setNoAnswerCount] = useState(0);
  const [currentView, setCurrentView] = useState('statement');

  const { transcript, listening, resetTranscript } = useSpeechRecognition();

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

  const speak = (text, autoNext = false) => {
    setIsPlaying(true);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-US';
    utterance.rate = 0.8;
    utterance.onend = () => {
      setIsPlaying(false);
      if (autoNext) {
        handleNext();
      }
      if (currentView === 'statement') {
        setCurrentView('question');
        setShowStatement(false);
      }
      if (currentView === 'question') {
        setShouldStartListening(true);
      }
    };
    speechSynthesis.speak(utterance);
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    resetTranscript();
    setNoAnswerCount(0);
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setCurrentView('question');
    } else if (currentStatementIndex < story1Statements.length - 1) {
      setCurrentStatementIndex(prevIndex => prevIndex + 1);
      setCurrentQuestionIndex(0);
      setCurrentView('statement');
      setShowStatement(true);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleQuestionAnswered = (answer) => {
    setSelectedAnswer(answer);
    const correctAnswer = currentQuestion.answer;
    const points = parseInt(currentQuestion.point, 10) || 0;
    const isCorrect = answer.toLowerCase().trim() === correctAnswer.toLowerCase().trim();

    if (isCorrect) {
      setScore(prevScore => ({ correct: prevScore.correct + 1 }));
      setTotalPoints(prevPoints => prevPoints + points);
    }

    setCurrentView('answer');
    speak(`${isCorrect ? `${answer} es correcto! ${currentQuestion.feedback}` : `${answer} es incorrecto! ${currentQuestion.feedback}`}`, true);
  };

  useEffect(() => {
    if (currentView === 'statement') {
      speak(currentStatement.text);
    } else if (currentView === 'question' && !isPlaying) {
      speak(currentQuestion.text);
    }
  }, [currentView, currentStatementIndex, currentQuestionIndex]);

  useEffect(() => {
    if (shouldStartListening && !listening && !isPlaying) {
      SpeechRecognition.startListening({ continuous: true, language: 'es-US' });
      setShouldStartListening(false);
    }
  }, [shouldStartListening, listening, isPlaying]);

  useEffect(() => {
    if (currentView === 'question' && listening && transcript) {
      SpeechRecognition.stopListening();
      handleQuestionAnswered(transcript);
    }
  }, [transcript, listening, currentView]);

  useEffect(() => {
    let timer;
    if (currentView === 'question' && !isPlaying && !transcript) {
      timer = setTimeout(() => {
        if (noAnswerCount < 3) {
          speak("Speak up please!");
          setNoAnswerCount(prevCount => prevCount + 1);
          setShouldStartListening(true);
        } else {
          handleQuestionAnswered("");
        }
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [currentView, isPlaying, transcript, noAnswerCount]);

  const handleTryAgain = () => {
    setCurrentStatementIndex(0);
    setCurrentQuestionIndex(0);
    setScore({ correct: 0 });
    setTotalPoints(0);
    setQuizCompleted(false);
    setShowStatement(true);
    setCurrentView('statement');
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
          image={currentQuestion.image || currentStatement.image}
          onNextQuestion={handleNext}
          onQuestionAnswered={handleQuestionAnswered}
          showStatement={showStatement}
          setShowStatement={setShowStatement}
          isPlaying={isPlaying}
          listening={listening}
          transcript={transcript}
          currentView={currentView} 
          setCurrentView={setCurrentView}
          transcriptLocked={transcriptLocked}
          setTranscriptLocked={setTranscriptLocked}
        />
      </div>
    </div>
  );
}