import db from ".";

const seedData = async () => {
  // Check if the decks already exist
  const existingStory1 = await db.decks.where("name").equals("Story1").first();
  // const existingStory2 = await db.decks.where("name").equals("Story2").first();

  // If decks already exist, return early to prevent duplicates
  if (existingStory1) {
    console.log("Decks already exist. Skipping seeding.");
    return;
  }

  // Copy the code below for adding more decks
  // Add Deck 1 if it doesn't exist
  let deckId1;
  if (!existingStory1) {
    deckId1 = await db.decks.add({ name: "Story1" });

    const story1cards = [
      {
        front: "Kim",
        back: "Who",
        emoji: "👥",
        deckId: deckId1,
        interval: 0,
        repetition: 0,
        easeFactor: 2.5,
        nextReviewDate: null,
      },
      {
        front: "Nima",
        back: "What",
        emoji: "🤔",
        deckId: deckId1,
        interval: 0,
        repetition: 0,
        easeFactor: 2.5,
        nextReviewDate: null,
      },
      {
        front: "Bor",
        back: "There is",
        emoji: "📍",
        deckId: deckId1,
        interval: 0,
        repetition: 0,
        easeFactor: 2.5,
        nextReviewDate: null,
      },
      {
        front: "Boshsiz",
        back: "Headless",
        emoji: "💀",
        deckId: deckId1,
        interval: 0,
        repetition: 0,
        easeFactor: 2.5,
        nextReviewDate: null,
      },
      {
        front: "Chavandoz",
        back: "Horseman",
        emoji: "🐴",
        deckId: deckId1,
        interval: 0,
        repetition: 0,
        easeFactor: 2.5,
        nextReviewDate: null,
      },
      {
        front: "Unda bor",
        back: "He has",
        emoji: "👫",
        deckId: deckId1,
        interval: 0,
        repetition: 0,
        easeFactor: 2.5,
        nextReviewDate: null,
      },
      {
        front: "Problema",
        back: "Problem",
        emoji: "🤕",
        deckId: deckId1,
        interval: 0,
        repetition: 0,
        easeFactor: 2.5,
        nextReviewDate: null,
      },
      {
        front: "U bor(adi)",
        back: "He go(es)",
        emoji: "🚶‍♂️",
        deckId: deckId1,
        interval: 0,
        repetition: 0,
        easeFactor: 2.5,
        nextReviewDate: null,
      },
      {
        front: "Doktor(ga)",
        back: "(to) the doctor",
        emoji: "👨‍⚕️",
        deckId: deckId1,
        interval: 0,
        repetition: 0,
        easeFactor: 2.5,
        nextReviewDate: null,
      },
      {
        front: "Sora(ydi)",
        back: "Ask(s)",
        emoji: "💬",
        deckId: deckId1,
        interval: 0,
        repetition: 0,
        easeFactor: 2.5,
        nextReviewDate: null,
      },
      {
        front: "Sizning",
        back: "Your",
        emoji: "👉",
        deckId: deckId1,
        interval: 0,
        repetition: 0,
        easeFactor: 2.5,
        nextReviewDate: null,
      },
      {
        front: "U de(ydi)",
        back: "He say(s)",
        emoji: "👄",
        deckId: deckId1,
        interval: 0,
        repetition: 0,
        easeFactor: 2.5,
        nextReviewDate: null,
      },
      {
        front: "Menda bor",
        back: "I have",
        emoji: "🙋‍♂️",
        deckId: deckId1,
        interval: 0,
        repetition: 0,
        easeFactor: 2.5,
        nextReviewDate: null,
      },
    ];

    await db.cards.bulkAdd(story1cards);
  }

  console.log("Sample decks and cards added");
};

export default seedData;
