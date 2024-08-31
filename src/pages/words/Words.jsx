import React, { useState, useEffect } from 'react';
import db from '../../db';
import Review from './Review';
import Streaks from './Streaks';
import BackBtn from '../../components/BackBtn';
import seedData from '../../db/seed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

function Words() {
  const steps1 = [
    {
      content: <h2 className="text-xl">Let's learn new words!</h2>,
      placement: "center",
      target: "body",
    },
    {
      content: <h2>Click Again if you dont know the word in the card above. It will come up again later.</h2>,
      placement: "bottom",
      target: "#again",
      title: "Again = I dont know it at all",
    },
    {
      content: <h2>Click Hard if it took you more than 1 minute to remember the word</h2>,
      placement: "bottom",
      target: "#hard",
      title: "Hard = I know it only 10% of the time",
    },
    {
      content: <h2>Click Good if it took you less than 1 minute to remember the word</h2>,
      placement: "bottom",
      target: "#good",
      title: "Good = I know it 50% of the time",
    },{
      content: <h2>Click Easy if it took you less than 10 seconds to remember the word</h2>,
      placement: "bottom",
      target: "#easy",
      title: "Easy = I know it 100% of the time",
    },
  ];

  const [state, setState] = useState({ run: false, steps: steps1 });
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

  const startTour = () => {
    setState((prevState) => ({ ...prevState, run: true }));
  };

  return (
    <section className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="px-4 py-2 bg-purple-500 text-white flex max-w-lg w-full">
        <BackBtn textColor="text-white" />
        <div className="w-full text-center flex items-center justify-between px-2">
          <div className="text-2xl text-center w-full">Word Review</div>
          <FontAwesomeIcon
            size="xl"
            onClick={startTour}
            icon={faQuestionCircle}
            className="text-white cursor-pointer rounded-full"
          />
        </div>
      </div>
      <div className="text-center h-screen bg-white shadow-lg max-w-lg w-full">
        {selectedDeck ? (
          <div>
            <Streaks />
            <Review deck={selectedDeck} setDecks={setDecks} state={state} setState={setState} startTour={startTour}/>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </section>
  );
}

export default Words;
