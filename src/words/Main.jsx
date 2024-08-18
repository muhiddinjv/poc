import React, { useState, useEffect } from "react";
import Review from "./Review";
import seedData from "../db/seed";
import db from "../db";
import Streaks from "./Streaks";
import { useNavigate } from "react-router-dom";

function Main() {
  const [decks, setDecks] = useState([]);
  const [selectedDeck, setSelectedDeck] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDecks();
  }, []);

  const fetchDecks = async () => {
    await seedData();
    // Fetch all decks
    const allDecks = await db.decks.toArray();

    // Fetch cards for each deck and attach them
    const decksWithCards = await Promise.all(
      allDecks.map(async (deck) => {
        const cards = await db.cards.where("deckId").equals(deck.id).toArray();
        return { ...deck, cards };
      })
    );

    setDecks(decksWithCards);

    //Automatically select the first deck for review
    if (decksWithCards.length > 0) {
      setSelectedDeck(decksWithCards[0]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="h-screen bg-white shadow-lg max-w-lg w-full py-4">
        {selectedDeck ? (
          <div className="text-center">
            <button
              className="bg-slate-500 text-white px-4 py-2 rounded"
              onClick={() => navigate(`/`)}
            >
              Stories
            </button>
            <Streaks />
            <Review deck={selectedDeck} setDecks={setDecks} />
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default Main;
