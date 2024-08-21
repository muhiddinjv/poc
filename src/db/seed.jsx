import db from ".";

const seedData = async () => {
  const existingStory1 = await db.decks.where("name").equals("Story1").first();

  if (existingStory1) {
    console.log("Decks already exist. Deleting and reseeding.");
    // Log the deck ID to ensure it's correct
    console.log("Existing deck ID:", existingStory1.id);
    await db.cards.where("deckId").equals(existingStory1.id).delete(); // Delete all cards associated with the deck
    await db.decks.delete(existingStory1.id); // Delete the deck itself
  }

  // Add Deck 1
  const deckId1 = await db.decks.add({ name: "Story1" });
  console.log("New deck ID:", deckId1);

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

  console.log("Sample decks and cards added");
};

export default seedData;
