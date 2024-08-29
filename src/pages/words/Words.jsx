import React, { useState, useEffect } from 'react';
import db from '../../db';
import Review from './Review';
import Streaks from './Streaks';
import BackBtn from '../../components/BackBtn';
import seedData from '../../db/seed';

function Words() {
  const [decks, setDecks] = useState([]);
  const [selectedDeck, setSelectedDeck] = useState(null);

  useEffect(() => {
    const fetchDecks = async () => {
      try {
        console.log('Fetching decks...');
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
      } catch (error) {
        console.error('Error fetching decks:', error);
      }
    };

    fetchDecks();
  }, []);

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
            <Review deck={selectedDeck} setDecks={setDecks} />
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </section>
  );
}

export default Words;
