import React, { useState, useEffect, useRef } from 'react';
import db from '../../db';
import Card from './Card';
import { useSpacedRepetition, calculateNextReview } from '../../hooks';
import Joyride from 'react-joyride';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Review({ deck, setDecks, state, setState, startTour }) {
  const { getDueCards } = useSpacedRepetition();
  const [dueCards, setDueCards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const wordsTourCompleted = localStorage.getItem('wordsTourCompleted');
    
    if (!wordsTourCompleted) {
      setState((prevState) => ({ ...prevState, run: true }));
    }

    if (deck && deck.cards) {
      const due = getDueCards(deck.cards);
      setDueCards(due);
      setCurrentCardIndex(0); // Reset index when due cards change
    }
  }, [deck]);

  const handleReview = async (difficulty) => {
    const currentCard = dueCards[currentCardIndex]?.[0];

    if (!currentCard) return;

    const updatedCard = calculateNextReview(currentCard, difficulty);

    // Update the card in the database
    await db.cards.put(updatedCard);

    // Update the card queue
    const updatedQueue = dueCards.filter((_, index) => index !== currentCardIndex);

    // Move to the next card
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % updatedQueue.length);

    // Update the deck state
    const updatedDeck = {
      ...deck,
      cards: deck.cards.map((card) =>
        card.id === currentCard.id ? updatedCard : card
      ),
    };

    setDecks((decks) => decks.map((d) => (d.id === deck.id ? updatedDeck : d)));
    setDueCards(updatedQueue);
  };

  const handleJoyrideCallback = (data) => {
    const { status } = data;

    if (status === 'finished' || status === 'skipped') {
      localStorage.setItem('wordsTourCompleted', 'true');
      setState((prevState) => ({ ...prevState, run: false }));
    }
  };

  if (dueCards.length === 0) {
    return <div>No cards available for review.</div>;
  }

  const currentCard = dueCards[currentCardIndex]?.[0];

  return (
    <div className="flex flex-col items-center">
      <div className="mb-2 flex items-center space-x-2">
        
          Cards left: {dueCards.length - currentCardIndex}
        
      </div>
      <p className="mb-2 text-purple-700">Do you know what this word in Spanish?</p>
      {currentCard && <Card front={currentCard.front} back={currentCard.back} />}
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
      <div className="mt-4 space-x-3">
        <button id='again' className="bg-slate-500 text-white px-4 py-2 rounded" onClick={() => handleReview(1)}>Again</button>
        <button id='hard' className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => handleReview(2)}>Hard</button>
        <button id='good' className="bg-yellow-500 text-white px-4 py-2 rounded" onClick={() => handleReview(3)}>Good</button>
        <button id='easy' className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => handleReview(4)}>Easy</button>
      </div>
    </div>
  );
}

export default Review;
