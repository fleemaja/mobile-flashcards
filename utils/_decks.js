import { AsyncStorage } from 'react-native'

export const DECKS_STORAGE_KEY = 'flash:decks'

export async function getDecks() {
  // AsyncStorage fetch of decks
  let response = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
  let decks = await JSON.parse(response) || {};
  return decks;
}

export async function getDeck(id) {
  // asyncStorage getItem decks - access decks by id key and return that deck object
  let decks = await getDecks();
  return decks[id];
}

export async function saveDeckTitle(title) {
  let decks = await getDecks();
  let updatedDecks = {
    ...decks,
    [title]: {
      title,
      questions: []
    }
  }

  await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(updatedDecks));
}

export async function addCardToDeck(title, question) {
  // getDeck by title/id. Add new question
  // save decks with this new question
  let decks = await getDecks();
  let deck = await getDeck(title);
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
}

export async function getDecksArray() {
  let decks = await getDecks();
  let decksArray = Object.keys(decks).map((key) => {
    return decks[key]
  })
  return decksArray;
}

export async function clearAll() {
  await AsyncStorage.clear();
}
