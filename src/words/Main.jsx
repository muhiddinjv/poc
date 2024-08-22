import React, { useState, useEffect } from "react";
import Reviewed from "./Reviewed";
import seedData from "../db/seed";
import db from "../db";
import Streaks from "./Streaks";
import { Link } from "react-router-dom";
import BackBtn from "../components/BackBtn";

function Main() {
  const [decks, setDecks] = useState([]);
  const [selectedDeck, setSelectedDeck] = useState(null);

  useEffect(() => {
    fetchDecks();
  }, []);

  const fetchDecks = async () => {
    await seedData();
    const allDecks = await db.decks.toArray();

    const decksWithCards = await Promise.all(
      allDecks.map(async (deck) => {
        const cards = await db.cards.where("deckId").equals(deck.id).toArray();
        return { ...deck, cards };
      })
    );

    setDecks(decksWithCards);

    if (decksWithCards.length > 0) {
      setSelectedDeck(decksWithCards[0]);
    }
  };

  const handleRestart = async () => {
    await fetchDecks(); // Re-fetch decks and cards
    if (decks.length > 0) {
      setSelectedDeck(decks[0]); // Set the first deck as selected for review
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="px-4 py-2 bg-purple-500 text-white flex max-w-lg w-full">
        <BackBtn textColor="text-white" />
        <div className="w-full text-center">
          <div className="text-2xl">Word Review</div>
        </div>
      </div>
      <div className="text-center h-screen bg-white shadow-lg max-w-lg w-full">
        {selectedDeck ? (
          <div>
            <Streaks />
            <Reviewed deck={selectedDeck} onRestart={handleRestart} />
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </section>
  );
}

export default Main;
