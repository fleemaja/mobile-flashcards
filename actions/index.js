import * as DecksStorage from '../utils/_decks'

export const RECEIVE_DECKS = "RECEIVE_DECKS";

export const receiveDecks = decks => ({
  type: RECEIVE_DECKS,
  decks
});

export const getDecks = () => dispatch => (
  DecksStorage
    .getDecks()
    .then(decks => dispatch(receiveDecks(decks)))
)

export const saveDeckTitle = (title) => dispatch => (
  DecksStorage
    .saveDeckTitle(title)
    .then(updatedDecks => dispatch(receiveDecks(updatedDecks)))
)

export const addCardToDeck = (title, question) => dispatch => (
  DecksStorage
    .addCardToDeck(title, question)
    .then(updatedDecks => dispatch(receiveDecks(updatedDecks)))
)
