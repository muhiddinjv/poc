import React, { useState, useEffect, useCallback, useMemo } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import Question from "./Question";
import ProgressBar from "./ProgressBar";
import QuizResults from "./QuizResults";
import { storydata } from "./storydata";
import TopBar from "../../../components/TopBar";
import Speech from "react-text-to-speech";
import Joyride from "react-joyride";

const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

const Quiz = ({ shuffleQuestions = false }) => {
  const steps1 = [
    {
      content: <h2 className="text-xl">Let's answer some questions!</h2>,
      placement: "center",
      target: "body",
    },
    {
      content: <h2>Listen to the statement as many times as you need to learn its pronunciation</h2>,
      placement: "bottom",
      target: "#play-statement",
      title: "Step 1: Play the Statement",
    },
    {
      content: <h2>Listen to the question to see if you can understand it without seeing it</h2>,
      placement: "bottom",
      target: "#play-question",
      title: "Step 2: Play the Question",
    },    {
      content: <h2>See the question if you do not understand it while listening</h2>,
      placement: "bottom",
      target: "#reveal-question",
      title: "Step 3: Reveal the Question",
    },
    {
      content: <h2>You have only 3-5 seconds to say only 1 or 2 word answers like "Si", "No" or "Jinete"</h2>,
      placement: "bottom",
      target: "#say-answer",
      title: "Step 4: Say the Answer",
    },
    {
      content: <h2>Listen to the correct answer to see if your answer is correct</h2>,
      placement: "bottom",
      target: "#play-answer",
      title: "Step 5: Play the Answer",
    },
    {
      content: <h2>See the answer if you do not understand it while listening</h2>,
      placement: "bottom",
      target: "#reveal-answer",
      title: "Step 6: Reveal the Answer",
    },
  ];

  const [state, setState] = useState({ run: false, steps: steps1 });
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

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return (
      <div className="bg-purple-500 min-h-screen flex flex-col justify-center items-center">
        <div className="min-h-screen bg-white shadow-lg max-w-lg w-full text-center pb-8">
          <span>Browser doesn't support speech recognition.</span>
        </div>
      </div>
    );
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
    const quizTourCompleted = localStorage.getItem('quizTourCompleted');
    
    if (!quizTourCompleted) {
      setState((prevState) => ({ ...prevState, run: true }));
    }

    if (transcript && !transcriptLocked) {
      const trimmedTranscript = transcript.trim();
      setFinalTranscript(trimmedTranscript);
      handleAnswerClick(trimmedTranscript);
    }
  }, [transcript, transcriptLocked, handleAnswerClick]);

  const handleJoyrideCallback = (data) => {
    const { status } = data;

    if (status === 'finished' || status === 'skipped') {
      localStorage.setItem('quizTourCompleted', 'true');
      setState((prevState) => ({ ...prevState, run: false }));
    }
  };

  const handleNextQuestion = useCallback(() => {
    setShowNextButton(false);
    setSelectedAnswer(null);
    setFinalTranscript(""); // Clear the final transcript on next question
    setTranscriptLocked(false); // Unlock the transcript for the next question
    resetTranscript(); // Reset the transcript for the next question

    if (currentQuestionIndex < currentStatement.questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else if (currentStatementIndex < shuffledStatements.length - 1) {
      setCurrentStatementIndex(prevIndex => prevIndex + 1);
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
    listening ? SpeechRecognition.stopListening() : SpeechRecognition.startListening({ language: 'es-US' });
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
        <Joyride
          continuous
          run={state.run}
          steps={state.steps}
          hideCloseButton
          scrollToFirstStep
          showSkipButton
          showProgress
          callback={handleJoyrideCallback}
          locale={{
            skip: <span className="bg-blue-500 text-white px-3 py-2 rounded">Skip</span>,
            back: <span className="bg-purple-500 text-white px-3 py-2 rounded">Back</span>,
          }}
        />
        <TopBar restartTour={restartTour}/>
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
          <div className="flex items-center text-blue-700">
            <div id="play-statement" onClick={()=>setStatementPlayed(true)} className="cursor-pointer p-1 rounded-full">
              <Speech
                text={currentStatement.statement}
                lang="es-US"
                rate={0.8}
                voiceURI="Microsoft Paloma Online (Natural) - Spanish (United States)"
                stopBtn={false}
              />
            </div>
            <h2 className="text-lg font-semibold m-2">{currentStatement.statement}</h2>
          </div>
        </div>
        <Question
          listening={listening}
          transcript={finalTranscript}
          questionObj={currentQuestion}
          selectedAnswer={selectedAnswer}
          statementPlayed={statementPlayed}
          startStopListening={startStopListening}
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

export default Quiz;
