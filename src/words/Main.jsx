import React, { useState, useEffect } from "react";
import Review from "./Review";
import seedData from "../db/seed";
import db from "../db";
import Streaks from "./Streaks";
import TopBar from "../components/TopBar";
import { Link } from "react-router-dom";

function Main() {
  const [decks, setDecks] = useState([]);
  const [selectedDeck, setSelectedDeck] = useState(null);

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
      <div className="px-4 py-2 bg-purple-500 text-white flex max-w-lg w-full">
        <Link to="/" className="py-1 px-2 bg-gray-500 rounded-lg font-bold bg-white text-gray-800">{'<'}</Link>
        <div className="w-full text-center">
          <div className="text-2xl">Word Review</div>
        </div>
      </div>
      <div className="text-center h-screen bg-white shadow-lg max-w-lg w-full">
        {selectedDeck ? (
          <div>
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
