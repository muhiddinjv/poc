import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { useSpeechToText } from "../hooks";

// Utility function to shuffle an array
const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

// Timer Component
const Timer = ({ timeLeft }) => (
    <div className="my-4 text-lg">
        ⏰ Time Left: {timeLeft} seconds
    </div>
);

// Question Component
const Question = ({
    questionObj,
    handleAnswerClick,
    showNextButton,
    selectedAnswer,
}) => {
    const { question, translation, answer, messageForCorrectAnswer, messageForIncorrectAnswer, explanation } = questionObj;

    const isCorrect = selectedAnswer && selectedAnswer.toLowerCase() === answer.toLowerCase();

    return (
        <div className="my-8">
            <h2 className="text-lg mb-2">{question}</h2>
            <p className="hidden text-lg mb-6">{translation}</p>
            {selectedAnswer && (
                <div className="mt-6">
                    <div className={`flex gap-2 items-center justify-center text-lg my-4 ${isCorrect ? "text-green-600" : "text-red-600"}`}>
                        {isCorrect ? <FontAwesomeIcon icon={faCheckCircle} /> : <FontAwesomeIcon icon={faTimesCircle} />}
                        <p>{isCorrect ? messageForCorrectAnswer : messageForIncorrectAnswer}</p>
                    </div>
                    <p className="hidden m-4 text-lg">{explanation}</p>
                </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                <button
                    onClick={() => handleAnswerClick(answer)}
                    className={`transition-colors duration-300 ease-in-out p-2 rounded text-lg font-medium shadow-md ${
                        selectedAnswer === answer
                            ? isCorrect
                                ? 'bg-green-500 text-white'
                                : 'bg-red-500 text-white'
                            : 'bg-blue-500 text-white hover:bg-blue-700'
                    }`}
                    disabled={selectedAnswer !== null}
                >
                    {answer}
                </button>
            </div>

            {showNextButton && (
                <button
                    onClick={showNextButton}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 mt-6 transition-colors duration-300 ease-in-out"
                >
                    Next Question
                </button>
            )}
        </div>
    );
};

// Progress Bar Component
const ProgressBar = ({ current, total }) => {
    const progressPercentage = (current / total) * 100;
    return (
        <div className=" bg-gray-300 rounded-full h-2.5 m-4">
            <div
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-in-out"
                style={{ width: `${progressPercentage}%` }}
            ></div>
        </div>
    );
};

// QuizResults Component
const QuizResults = ({ score, totalQuestions, totalPoints, maxPoints, handleTryAgain }) => (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        <div className="h-screen bg-white shadow-lg max-w-lg w-full py-4 text-center">
        <h1 className="text-lg font-bold mb-6">🎉 Quiz Completed!</h1>
        <p className="text-xl mb-4">Correct answers: {score.correct} / {totalQuestions}</p>
        <p className="text-xl mb-4">Total points: {totalPoints} / {maxPoints}</p>
        <button
            onClick={handleTryAgain}
            className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700 mt-4 transition-colors duration-300 ease-in-out"
        >
            Try Again
        </button>
        </div>
    </div>
);

// Main Quiz Component
export const Quiz = ({ quiz, shuffleQuestions = false, timer = 0 }) => {
    const [quizStarted, setQuizStarted] = useState(false);
    const [currentStatementIndex, setCurrentStatementIndex] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState({ correct: 0 });
    const [totalPoints, setTotalPoints] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showNextButton, setShowNextButton] = useState(false);
    const [timeLeft, setTimeLeft] = useState(timer);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [quizStatements, setQuizStatements] = useState(quiz.statements);
    const [textInput, setTextInput] = useState('');
    const  { transcript, isListening, startListening, stopListening } = useSpeechToText({
        // lang: 'en-US',
        continuous: true
    })

    const startStopListening = () => {
        isListening ? stopVoiceInput() : startListening();
    }

    const stopVoiceInput = () => {
        setTextInput(prevValue => prevValue + (transcript.length ? (prevValue.length ? ' ' : '') + transcript : ''));
        stopListening();
    }

    // Calculate the total possible points
    const maxPoints = quiz.statements.reduce(
        (total, statement) =>
            total +
            statement.questions.reduce((qTotal, question) => qTotal + (parseInt(question.point, 10) || 0), 0),
        0
    );

    const totalQuestions = quiz.statements.reduce((total, statement) => total + statement.questions.length, 0);

    useEffect(() => {
        if (shuffleQuestions) {
            const shuffledStatements = quiz.statements.map(statement => ({
                ...statement,
                questions: shuffleArray([...statement.questions])
            }));
            setQuizStatements(shuffledStatements);
        }
    }, [shuffleQuestions, quiz.statements]);

    useEffect(() => {
        if (quizStarted && !quizCompleted && timer > 0) {
            const countdown = setInterval(() => {
                setTimeLeft((prevTime) => {
                    if (prevTime <= 1) {
                        clearInterval(countdown);
                        setQuizCompleted(true);
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
            return () => clearInterval(countdown);
        }
    }, [timer, quizStarted, quizCompleted]);

    const handleStartQuiz = () => {
        setQuizStarted(true);
        setTimeLeft(timer);
    };

    const handleAnswerClick = (selectedAnswer) => {
        setSelectedAnswer(selectedAnswer);
        const correctAnswer = quizStatements[currentStatementIndex].questions[currentQuestionIndex].answer;
        const points = parseInt(quizStatements[currentStatementIndex].questions[currentQuestionIndex].point, 10) || 0;

        if (selectedAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            setScore({ correct: score.correct + 1 });
            setTotalPoints(totalPoints + points);
        }

        setShowNextButton(true);
    };

    const handleNextQuestion = () => {
        setShowNextButton(false);
        setSelectedAnswer(null);

        if (currentQuestionIndex < quizStatements[currentStatementIndex].questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else if (currentStatementIndex < quizStatements.length - 1) {
            setCurrentStatementIndex(currentStatementIndex + 1);
            setCurrentQuestionIndex(0);
        } else {
            setQuizCompleted(true);
        }
    };

    const handleTryAgain = () => {
        setQuizStarted(false);
        setCurrentStatementIndex(0);
        setCurrentQuestionIndex(0);
        setScore({ correct: 0 });
        setTotalPoints(0);
        setTimeLeft(timer);
        setQuizCompleted(false);
        setQuizStatements(quiz.statements);
    };

    if (!quizStarted) {
        return (
            <div className="min-h-screen bg-gray-100 flex flex-col items-center">
                <div className="h-screen bg-white shadow-lg max-w-lg w-full py-4 text-center">
                <div className="flex justify-center items-center border-b px-4 py-2">
                    <div className="space-x-2">
                        <button className="py-1 px-2 bg-gray-200 rounded">Quiz</button>
                        <button className="py-1 px-2 bg-gray-200 rounded">Gapfil</button>
                        <button className="py-1 px-2 bg-gray-200 rounded">Number</button>
                        <button className="py-1 px-2 bg-gray-200 rounded">Reorder</button>
                        <button className="py-1 px-2 bg-gray-200 rounded">Retell</button>
                    </div>
                    </div>
                <h1 className="text-xl font-bold my-6">{quiz.quizTitle}</h1>
                <p className="text-lg text-gray-700 mb-6">{quiz.quizSynopsis}</p>
                <button
                    onClick={handleStartQuiz}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300 ease-in-out"
                >
                    Start Quiz
                </button>
            </div>
        </div>
        );
    }

    if (quizCompleted) {
        return <QuizResults score={score} totalQuestions={totalQuestions} totalPoints={totalPoints} maxPoints={maxPoints} handleTryAgain={handleTryAgain} />;
    }

    const currentStatement = quizStatements[currentStatementIndex];
    const currentQuestion = currentStatement.questions[currentQuestionIndex];

    // Calculate current question number for progress
    const currentQuestionNumber = quizStatements.slice(0, currentStatementIndex).reduce((total, statement) => total + statement.questions.length, 0) + currentQuestionIndex + 1;

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <div className="min-h-screen bg-white shadow-lg max-w-lg w-full py-4 text-center">
            <h1 className="text-xl font-bold my-6">{quiz.quizTitle}</h1>
                {timer > 0 && <Timer timeLeft={timeLeft} />}
                <ProgressBar current={currentQuestionNumber} total={totalQuestions} />
                <h2 className="text-lg mb-2">
                    Statement {currentStatementIndex + 1}/{quizStatements.length}, Question {currentQuestionNumber}/{totalQuestions}
                </h2>
                <h2 className="text-lg font-semibold mb-4">{currentStatement.statement}</h2>
                <div className="flex justify-center items-center py-4 bg-gray-50">
                {currentStatement.image && (
                    <img src={currentStatement.image} alt="statement visual" className="w-72 h-72" />
                )}
                </div>
                <div className="flex space-x-2 justify-center">
                    <button onClick={startStopListening} className="bg-gray-300 px-3 py-1 rounded">{isListening ? 'Stop listening' : 'Speak'}</button>
                </div>
                <textarea value={isListening ? textInput + (transcript.length ? (textInput.length ? '' : '') + transcript : '') : textInput} 
                onChange={e => setTextInput(e.target.value)} className="w-3/4 h-24 border border-gray-300 rounded mt-4 p-2 m-2" placeholder="Enter your answer here"
                disabled={isListening}
                />
                <Question
                    questionObj={currentQuestion}
                    handleAnswerClick={handleAnswerClick}
                    showNextButton={showNextButton ? handleNextQuestion : null}
                    selectedAnswer={selectedAnswer}
                />
            </div>
        </div>
    );
};
