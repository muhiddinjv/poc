import React, { useState, useEffect } from "react";
import Review from "./Review";
import seedData from "../db/seed";
import db from "../db";
import Streaks from "./Streaks";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";

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
      <div className="text-center h-screen bg-white shadow-lg max-w-lg w-full">
        <TopBar />
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
