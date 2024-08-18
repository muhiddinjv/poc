// src/db.js
import Dexie from 'dexie';

const db = new Dexie('taletalk');
db.version(1).stores({
  decks: '++id, name',
  cards: '++id, front, back, emoji, interval, repetition, easeFactor, nextReviewDate, deckId',
  progress: '++id, reviewedCards, streak',
  settings: '++id, key, value',
});

export default db;
