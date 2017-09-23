import { AsyncStorage } from 'react-native'
export const DECKS_STORAGE_KEY = 'flashcards:decks'

async function retrieveDecks() {
  let response = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
  let decks = await JSON.parse(response) || {};
  return decks;
}

export async function getDecks() {
  let decks = await retrieveDecks();
  return decks;
}

export async function getDeck(id) {
  let decks = await retrieveDecks();
  return decks[id];
}

export async function saveDeckTitle(title) {
  let decks = await retrieveDecks();

  let updatedDecks = {
    ...decks,
    [title]: {
      title,
      questions: []
    }
  }

  await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(updatedDecks));
  return updatedDecks;
}

export async function addCardToDeck(title, question) {
  let decks = await retrieveDecks();
  let deck = await getDeck(id);

  let updatedDeck = {
    title,
    questions: [
      ...deck.questions,
      question
    ]
  }
  let updatedDecks = {
    ...decks,
    title: updatedDeck
  }

  await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(updatedDecks));
  return updatedDecks;
}
