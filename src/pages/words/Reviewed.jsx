import React, { useState, useEffect } from "react";
import Card from "./Card";
import db from "../db";

function Reviewed({ deck, onRestart }) {
  const [cardQueue, setCardQueue] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isReviewComplete, setIsReviewComplete] = useState(false);

  useEffect(() => {
    if (deck.cards && deck.cards.length > 0) {
      setCardQueue(deck.cards);
      setCurrentCardIndex(0); // Reset to the first card when the deck changes
      // setIsReviewComplete(false);
    }
  }, [deck]);

  const handleAgain = () => {
    const currentCard = cardQueue[currentCardIndex];
    setCardQueue((prevQueue) => {
      const newQueue = [
        ...prevQueue.slice(0, currentCardIndex),
        ...prevQueue.slice(currentCardIndex + 1),
        currentCard,
      ];
      return newQueue;
    });
  };

  const handleRemembered = async () => {
    const currentCard = cardQueue[currentCardIndex];
    await db.cards.delete(currentCard.id); // Remove the card from the database

    setCardQueue((prevQueue) => prevQueue.filter((_, index) => index !== currentCardIndex));
  };

  useEffect(() => {
    if (cardQueue.length === 0) {
      setIsReviewComplete(true);
    } else if (currentCardIndex >= cardQueue.length) {
      setCurrentCardIndex(0); // Reset to the first card if we go beyond the queue
    }
  }, [cardQueue, currentCardIndex]);

  const handleRestart = () => {
    onRestart(); // Trigger the restart logic from the parent component
  };

  if (isReviewComplete || cardQueue.length === 0) {
    return (
      <div className="flex flex-col items-center">
        <div className="text-2xl mb-4">Takrorlash tugadi!</div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleRestart}>
          Qaytadan boshlash
        </button>
      </div>
    );
  }

  const currentCard = cardQueue[currentCardIndex];

  if (!currentCard) {
    return null; // Add a fallback in case currentCard is undefined
  }

  return (
    <div className="flex flex-col items-center">
      <div className="mb-2">
        Cards {cardQueue.length}
      </div>
      <p className="mb-2 text-purple-700">Do you know the meaning of the word below?</p>
      <Card front={currentCard.front} back={currentCard.back} />
      <div className="mt-4 space-x-3">
        <button className="bg-slate-500 text-white px-4 py-2 rounded" onClick={handleAgain}>I dont</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleRemembered}>I do</button>
      </div>
    </div>
  );
}

export default Reviewed;
