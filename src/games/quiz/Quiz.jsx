import React, { useState, useEffect, useCallback } from "react";

import { useSpeechRecognition, useSpeechToText, useSpeechToTexts } from "../../hooks";
import Question from "./Question";
import ProgressBar from "./ProgressBar";
import QuizResults from "./QuizResults";

const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

export const Quiz = ({ quiz, shuffleQuestions = false }) => {
    const [quizStarted, setQuizStarted] = useState(false);
    const [currentStatementIndex, setCurrentStatementIndex] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState({ correct: 0 });
    const [totalPoints, setTotalPoints] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showNextButton, setShowNextButton] = useState(false);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [quizStatements, setQuizStatements] = useState(quiz.statements);
    const { transcript, isListening, startListening, stopListening } = useSpeechToTexts()
    const startStopListening = () => {
        isListening ? stopListening() : startListening();
    }

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

    const handleStartQuiz = () => {
        setQuizStarted(true);
    };

    const handleAnswerClick = (selectedAnswer) => {
        setSelectedAnswer(selectedAnswer);
        const correctAnswer = quizStatements[currentStatementIndex].questions[currentQuestionIndex].answer;
        const points = parseInt(quizStatements[currentStatementIndex].questions[currentQuestionIndex].point, 10) || 0;

        if (selectedAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            setScore(prevScore => ({ correct: prevScore.correct + 1 }));
            setTotalPoints(prevPoints => prevPoints + points);
        }

        setShowNextButton(true);
    };

    const handleNextQuestion = () => {
        setShowNextButton(false);
        setSelectedAnswer(null);

        if (currentQuestionIndex < quizStatements[currentStatementIndex].questions.length - 1) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        } else if (currentStatementIndex < quizStatements.length - 1) {
            setCurrentStatementIndex(prevIndex => prevIndex + 1);
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

    const currentQuestionNumber = quizStatements.slice(0, currentStatementIndex).reduce((total, statement) => total + statement.questions.length, 0) + currentQuestionIndex + 1;

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <div className="min-h-screen bg-white shadow-lg max-w-lg w-full py-4 text-center">
            <h1 className="text-xl font-bold my-6">{quiz.quizTitle}</h1>
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
                <span>{transcript}</span>
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
