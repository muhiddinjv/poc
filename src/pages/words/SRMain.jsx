import React, { useState, useEffect } from "react";
import { Rating, State, generatorParameters, fsrs } from "ts-fsrs";
import { story1words } from "../../data";
import Speech from "react-text-to-speech";

function Skeleton() {
  return (
    <div className="loading-skeleton w-11/12 aspect-square mt-4 rounded-lg"/>
  );
}

const CardStorage = {
  loadCards: () => {
    const storedCards = localStorage.getItem("cards");
    if (storedCards) {
      return JSON.parse(storedCards);
    }
    return story1words;
  },
  saveCards: (cards) => {
    localStorage.setItem("cards", JSON.stringify(cards));
  },
};

const Scheduler = {
  f: fsrs(generatorParameters({ initial_stability: 0.5 })),

  scheduleCard: (card, rating) => {
    const reviewDate = new Date();
    const schedulingResults = Scheduler.f.repeat(card, reviewDate);
    const result = schedulingResults[rating];

    return {
      ...card,
      difficulty: result.card.difficulty,
      due: result.card.due.toISOString(), // Store as ISO string for consistency
      elapsed_days: result.card.elapsed_days,
      lapses: rating === Rating.Again ? card.lapses + 1 : card.lapses,
      last_review: reviewDate.toISOString(),
      reps: result.card.reps + 1,
      scheduled_days: result.card.scheduled_days,
      stability: result.card.stability,
      state: result.card.state,
    };
  },

  // Function to get the interval until the next review
  getNextReviewInterval: (card, rating) => {
    const reviewDate = new Date();
    const schedulingResults = Scheduler.f.repeat(card, reviewDate);
    const result = schedulingResults[rating];
    const diffMs = new Date(result.card.due) - reviewDate;
    return Scheduler.formatInterval(diffMs);
  },

  // Format the interval as a human-readable string
  formatInterval: (ms) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) return `${years}y`;
    if (months > 0) return `${months}mo`;
    if (weeks > 0) return `${weeks}w`;
    if (days > 0) return `${days}d`;
    if (hours > 0) return `${hours}h`;
    if (minutes > 0) return `${minutes}m`;
    return `${seconds}s`;
  },
};

const StatusBar = ({ cards }) => {
  const newCount = cards.filter((card) => card.state === State.New).length;
  const learningCount = cards.filter(
    (card) => card.state === State.Learning
  ).length;
  const reviewCount = cards.filter(
    (card) => card.state === State.Review
  ).length;

  return (
    <div className="flex justify-between gap-2 mb-2">
      <StatusBadge label="New" count={newCount} color="blue" />
      <StatusBadge label="Learning" count={learningCount} color="red" />
      <StatusBadge label="Review" count={reviewCount} color="green" />
    </div>
  );
};

const StatusBadge = ({ label, count, color }) => {
  return (
    <span className={`bg-${color}-500 text-white py-1 px-3 rounded-full`}>
      {label}: {count}
    </span>
  );
};

const GradeButton = ({
  color,
  rating,
  children,
  handleClick,
  interval,
  tip,
}) => {
  return (
    <button
      onClick={() => handleClick(rating)}
      className={`bg-${color}-500 text-white py-2 px-4 rounded`}
      title={tip}
      aria-label={tip}
    >
     {interval} {children} 
    </button>
  );
};

const ReviewComplete = ({ nextReviewDate }) => (
  <div>
    <div className="text-center text-2xl font-semibold text-green-600">
      Review Complete!
    </div>
    <div className="pt-4 text-center">
      Next review: {nextReviewDate.toLocaleString()}
    </div>
  </div>
);

const CardReview = ({
  currentCard,
  showAnswer,
  setShowAnswer,
  handleGrade,
  intervals,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="w-full h-full flex flex-col justify-between p-4">
      <div>
        <div className="text-lg text-blue-500 font-semibold flex justify-center items-center">
          <Speech
            text={currentCard.front}
            voiceURI="Microsoft Paloma Online (Natural) - Spanish (United States)"
            lang="es-US"
            rate={0.8}
            stopBtn={false}
          />
          <span className="ml-2">{currentCard.front}</span>
        </div>
        {showAnswer && (
          <div className="flex flex-col items-center">
            {!imageLoaded && !imageError && <Skeleton />}

            {currentCard.image && !imageError && (
              <img
                src={currentCard.image}
                alt={currentCard.back}
                className={`bg-gray-200 mt-4 text-center text-gray-700 object-fit w-11/12 aspect-square rounded-lg ${!imageLoaded && "hidden"}`}
                onLoad={()=>setImageLoaded(true)}
                onError={()=>setImageError(true)}
              />
            )}

            {imageError && (
              <div className="mt-4 text-center text-red-500">Image failed to load</div>
            )}

            <div className="mt-4 text-center text-gray-700">
              {currentCard.back}
            </div>
          </div>
        )}
      </div>
      <div className="mt-4 flex justify-center">
        {!showAnswer ? (
          <button
            onClick={() => setShowAnswer(true)}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Show Answer
          </button>
        ) : (
          <GradeButtons handleGrade={handleGrade} intervals={intervals} />
        )}
      </div>
    </div>
  );
};


const GradeButtons = ({ handleGrade, intervals }) => (
  <div className="flex justify-center w-full gap-2">
    <GradeButton
      color="red"
      rating={Rating.Again}
      handleClick={handleGrade}
      interval={intervals[Rating.Again]}
      tip="Your answer was completely incorrect."
    >
      Again
    </GradeButton>
    <GradeButton
      color="yellow"
      rating={Rating.Hard}
      handleClick={handleGrade}
      interval={intervals[Rating.Hard]}
      tip="Your answer was partially correct, and/or you hesitated a lot."
    >
      Hard
    </GradeButton>
    <GradeButton
      color="green"
      rating={Rating.Good}
      handleClick={handleGrade}
      interval={intervals[Rating.Good]}
      tip="You answered correctly with a little bit of hesitation."
    >
      Good
    </GradeButton>
    <GradeButton
      color="blue"
      rating={Rating.Easy}
      handleClick={handleGrade}
      interval={intervals[Rating.Easy]}
      tip="You answered correctly with no hesitation."
    >
      Easy
    </GradeButton>
  </div>
);

const SRMain = () => {
  const [cards, setCards] = useState(CardStorage.loadCards());
  const [reviewComplete, setReviewComplete] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);

  // Function to get due cards sorted by due date
  const getDueCards = (cards) => {
    const now = new Date();
    return cards
      .filter((card) => new Date(card.due) <= now)
      .sort((a, b) => new Date(a.due) - new Date(b.due));
  };

  useEffect(() => {
    CardStorage.saveCards(cards);
    const dueCards = getDueCards(cards);
    if (dueCards.length === 0) {
      setReviewComplete(true);
      setCurrentCard(null);
    } else {
      setReviewComplete(false);
      setCurrentCard(dueCards[0]);
    }
  }, [cards]);

  const handleGrade = (rating) => {
    if (!currentCard) return;

    const updatedCard = Scheduler.scheduleCard(currentCard, rating);
    const updatedCards = cards.map((card) =>
      card.id === updatedCard.id ? updatedCard : card
    );

    setCards(updatedCards);
    setShowAnswer(false);
  };

  // Recompute dueCards whenever cards change
  const dueCards = getDueCards(cards);
  const nextReviewDate = dueCards.length > 0 ? new Date(dueCards[0].due) : null;

  // Calculate intervals for the current card
  const intervals = currentCard
    ? {
        [Rating.Again]: Scheduler.getNextReviewInterval(currentCard, Rating.Again),
        [Rating.Hard]: Scheduler.getNextReviewInterval(currentCard, Rating.Hard),
        [Rating.Good]: Scheduler.getNextReviewInterval(currentCard, Rating.Good),
        [Rating.Easy]: Scheduler.getNextReviewInterval(currentCard, Rating.Easy),
      }
    : {};

  return (
    <div className="flex flex-col items-center py-4 h-full">
      <StatusBar cards={cards} />
      {reviewComplete ? (
        <ReviewComplete nextReviewDate={nextReviewDate} />
      ) : currentCard ? (
        <CardReview
          currentCard={currentCard}
          showAnswer={showAnswer}
          setShowAnswer={setShowAnswer}
          handleGrade={handleGrade}
          intervals={intervals}
        />
      ) : (
        <div className="text-center">Loading...</div>
      )}
    </div>
  );
};

export default SRMain;