import React, { useState, useEffect } from "react";
import { Rating, State, generatorParameters, fsrs } from "ts-fsrs";
import { story1words } from "../../data";
import Speech from "react-text-to-speech";
import moment from "moment";

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
    const reviewDate = moment();
    const schedulingResults = Scheduler.f.repeat(card, reviewDate.toDate());
    const result = schedulingResults[rating];

    return {
      ...card,
      difficulty: result.card.difficulty,
      due: moment(result.card.due).valueOf(),
      elapsed_days: result.card.elapsed_days,
      lapses: rating === Rating.Again ? card.lapses + 1 : card.lapses,
      last_review: reviewDate.valueOf(),
      reps: result.card.reps + 1,
      scheduled_days: result.card.scheduled_days,
      stability: result.card.stability,
      state: result.card.state,
    };
  },

  getNextReviewInterval: (card, rating) => {
    const reviewDate = moment();
    const schedulingResults = Scheduler.f.repeat(card, reviewDate.toDate());
    const result = schedulingResults[rating];
    const diffMs = moment(result.card.due).diff(reviewDate);
    return Scheduler.formatInterval(diffMs);
  },

  formatInterval: (ms) => {
    const duration = moment.duration(ms);
    if (duration.asYears() >= 1) return `${Math.floor(duration.asYears())}y`;
    if (duration.asMonths() >= 1) return `${Math.floor(duration.asMonths())}mo`;
    if (duration.asWeeks() >= 1) return `${Math.floor(duration.asWeeks())}w`;
    if (duration.asDays() >= 1) return `${Math.floor(duration.asDays())}d`;
    if (duration.asHours() >= 1) return `${Math.floor(duration.asHours())}h`;
    if (duration.asMinutes() >= 1) return `${Math.floor(duration.asMinutes())}m`;
    return `${Math.floor(duration.asSeconds())}s`;
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
  <div className="my-6">
    <div className="text-center text-2xl font-semibold text-green-600">
      Review Complete!
    </div>
    <div className="pt-2 text-center">
      Next review: {nextReviewDate ? moment(nextReviewDate).format('HH:mm:ss, MMM Do YYYY') : 'No upcoming reviews'}
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
  const frontLanguage = 'ar';
  const backLanguage = 'en';

  return (
    <div className="w-full h-full flex flex-col justify-between p-4">
      <div>
        <div className="text-lg text-blue-500 font-semibold flex justify-center items-center">
          <Speech
            text={currentCard.text[frontLanguage]}
            voiceURI="Microsoft Shakir Online (Natural) - Arabic (Egypt)"
            //Microsoft Shakir Online (Natural) - Arabic (Egypt)
            lang="ar-EG" //es-US
            rate={0.8}
            stopBtn={false}
          /> {/* CARD FRONT */}
          <span className="ml-2">{currentCard.text[frontLanguage]}</span>
        </div>
        {showAnswer && (
          <div className="flex flex-col items-center">
            {!imageLoaded && !imageError && <Skeleton />}

            {currentCard.image && !imageError && (
              <img 
                src={currentCard.image}
                alt={currentCard.text[backLanguage]}
                className={`bg-gray-200 mt-4 text-center text-gray-700 object-fit w-11/12 aspect-square rounded-lg ${!imageLoaded && "hidden"}`}
                onLoad={()=>setImageLoaded(true)}
                onError={()=>setImageError(true)}
              />
            )}

            {imageError && (
              <div className="mt-4 text-center text-red-500">Image failed to load</div>
            )}

            <div className="mt-4 text-center text-gray-700">
              {currentCard.text[backLanguage]}
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
  const [cards, setCards] = useState([]);
  const [reviewComplete, setReviewComplete] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state

  const getDueCards = (cards) => {
    const now = moment();
    return cards
      .filter((card) => moment(card.due).isSameOrBefore(now))
      .sort((a, b) => moment(a.due).diff(moment(b.due)));
  };

  const getAllCardsSortedByDueDate = (cards) => {
    return cards.sort((a, b) => moment(a.due).diff(moment(b.due)));
  };

  useEffect(() => {
    const storedCards = CardStorage.loadCards();
    if (storedCards && storedCards.length > 0) {
      setCards(storedCards);
    } else {
      setCards(story1words); // Ensure the fallback story is used on first load
    }
    setLoading(false); // Mark loading as complete after cards are loaded
  }, []);

  useEffect(() => {
    if (!loading) {
      CardStorage.saveCards(cards); 
      const dueCards = getDueCards(cards);
      if (dueCards.length === 0) {
        setReviewComplete(true);
        setCurrentCard(null);
      } else {
        setReviewComplete(false);
        setCurrentCard(dueCards[0]);
      }
    }
  }, [cards, loading]);

  const handleGrade = (rating) => {
    if (!currentCard) return;

    const updatedCard = Scheduler.scheduleCard(currentCard, rating);
    const updatedCards = cards.map((card) =>
      card.id === updatedCard.id ? updatedCard : card
    );

    setCards(updatedCards);
    setShowAnswer(false);
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  const allCardsSorted = getAllCardsSortedByDueDate(cards);
  const nextReviewDate = allCardsSorted.length > 0 ? moment(allCardsSorted[0].due).valueOf() : null;

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