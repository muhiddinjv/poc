import React, { useState, useEffect } from 'react';
import { Rating, State, generatorParameters, fsrs, createEmptyCard, Grades } from 'ts-fsrs';
import { formatDate } from 'ts-fsrs';

const params = generatorParameters({ enable_fuzz: true });
const f = fsrs(params);

// Initialize flashcards from localStorage or use default ones
const loadFlashcards = () => {
  const storedFlashcards = localStorage.getItem('flashcards');
  if (storedFlashcards) {
    return JSON.parse(storedFlashcards);
  }
  return [
    {
      id: 1,
      front: 'What is React?',
      back: 'A JavaScript library for building user interfaces.',
      due: new Date(),
      last_review: null,
      state: State.New,
    },
    {
      id: 2,
      front: 'What is Vite?',
      back: 'A build tool that significantly improves the frontend development experience.',
      due: new Date(),
      last_review: null,
      state: State.New,
    },
    // Add more flashcards as needed
  ];
};

function scheduleCard(reviewDate, cardDate = new Date()) {
  const card = createEmptyCard(cardDate); // Create an empty card with the specified date.
  const scheduling_cards = f.repeat(card, reviewDate); // Get the scheduling results for the card.

  // Format and structure the results for easier usage.
  const formattedCards = Grades.map((grade) => {
    const { log, card } = scheduling_cards[grade];
    return {
      grade: Rating[grade], // Rating like Again, Hard, Good, Easy
      card: {
        ...card,
        due: formatDate(card.due), // Format the due date
        last_review: formatDate(card.last_review), // Format the last review date
      },
      log: {
        ...log,
        review: formatDate(log.review), // Format the review date
      },
    };
  });

  return formattedCards;
}

const StatusBar = ({ flashcards }) => {
  const newCount = flashcards.filter(card => card.state === State.New).length;
  const learningCount = flashcards.filter(card => card.state === State.Learning).length;
  const reviewCount = flashcards.filter(card => card.state === State.Review).length;

  return (
    <div className="flex justify-between mb-4">
      <span className="bg-blue-500 text-white py-1 px-3 rounded-full">
        New: {newCount}
      </span>
      <span className="bg-red-500 text-white py-1 px-3 rounded-full">
        Learning: {learningCount}
      </span>
      <span className="bg-green-500 text-white py-1 px-3 rounded-full">
        Review: {reviewCount}
      </span>
    </div>
  );
};

const SRApp = () => {
  const [flashcards, setFlashcards] = useState(loadFlashcards());
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [reviewComplete, setReviewComplete] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  // Save flashcards to localStorage whenever they are updated
  useEffect(() => {
    localStorage.setItem('flashcards', JSON.stringify(flashcards));
  }, [flashcards]);

  // Check if review is complete
  useEffect(() => {
    const dueCards = flashcards.filter(card => new Date(card.due) <= new Date());
    if (dueCards.length === 0) {
      setReviewComplete(true);
    } else {
      setReviewComplete(false);
    }
  }, [flashcards]);

  const handleGrade = (rating) => {
    const currentCard = flashcards[currentCardIndex];
    const schedulingResults = scheduleCard(new Date(), currentCard.due);

    // Get the scheduling result based on the user's rating
    const result = schedulingResults.find(r => r.grade === Rating[rating]);

    // Update the current card with new due date and last review date
    const updatedCard = {
      ...currentCard,
      due: new Date(result?.card.due || currentCard.due),
      last_review: new Date(),
      state: State.Review // Update state as needed
    };

    // Update the flashcards array with the updated card
    const updatedFlashcards = flashcards.map((card, index) =>
      index === currentCardIndex ? updatedCard : card
    );

    setFlashcards(updatedFlashcards);

    // Move to the next card or loop back to the first one
    const dueCards = updatedFlashcards.filter(card => new Date(card.due) <= new Date());
    if (dueCards.length > 0) {
      setCurrentCardIndex((prevIndex) =>
        prevIndex === updatedFlashcards.length - 1 ? 0 : prevIndex + 1
      );
    }
    setShowAnswer(false);
  };

  const currentCard = flashcards[currentCardIndex];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <StatusBar flashcards={flashcards} />
      {reviewComplete ? (
        <div className="text-center text-2xl font-semibold text-green-600">
          Review Complete!
        </div>
      ) : (
        <div className="w-full max-w-md p-4 bg-white rounded shadow">
          <div className="text-lg font-semibold text-center">
            {currentCard.front}
          </div>
          {showAnswer && (
            <div className="mt-4 text-center text-gray-700">
              {currentCard.back}
            </div>
          )}
          <div className="mt-4 flex justify-center">
            {!showAnswer ? (
              <button
                onClick={() => setShowAnswer(true)}
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Show Answer
              </button>
            ) : (
              <div className="flex justify-between w-full">
                <button
                  onClick={() => handleGrade(Rating.Again)}
                  className="bg-red-500 text-white py-2 px-4 rounded"
                >
                  Again
                </button>
                <button
                  onClick={() => handleGrade(Rating.Hard)}
                  className="bg-yellow-500 text-white py-2 px-4 rounded"
                >
                  Hard
                </button>
                <button
                  onClick={() => handleGrade(Rating.Good)}
                  className="bg-green-500 text-white py-2 px-4 rounded"
                >
                  Good
                </button>
                <button
                  onClick={() => handleGrade(Rating.Easy)}
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                  Easy
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SRApp;
