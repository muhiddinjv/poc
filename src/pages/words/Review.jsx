import React, { useState, useEffect } from 'react';
import db from '../../db';
import Card from './Card';
import { useSpacedRepetition, calculateNextReview } from '../../hooks';

function Review({ deck, setDecks }) {
  const { getDueCards } = useSpacedRepetition();
  const [dueCards, setDueCards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
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

  if (dueCards.length === 0) {
    return <div>No cards available for review.</div>;
  }

  const currentCard = dueCards[currentCardIndex]?.[0];

  return (
    <div className="flex flex-col items-center">
      <div className="mb-2">
        Cards left: {dueCards.length - currentCardIndex}
      </div>
      <p className="mb-2 text-purple-700">Do you know what this means?</p>
      {currentCard && <Card front={currentCard.front} back={currentCard.back} />}
      <div className="mt-4 space-x-3">
        <button className="bg-slate-500 text-white px-4 py-2 rounded" onClick={() => handleReview(1)}>Again</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => handleReview(2)}>Hard</button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded" onClick={() => handleReview(3)}>Good</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => handleReview(4)}>Easy</button>
      </div>
    </div>
  );
}

export default Review;
