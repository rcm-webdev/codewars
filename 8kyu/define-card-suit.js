//Name: Define Card Suit
//Difficulty: 8kyu
//Tags: Fundamentals, Strings

//-------------------------------------------------------------------------------------------------------------------------
//Description

// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

//-------------------------------------------------------------------------------------------------------------------------

//My Solution w/ PREP

//parameters: a string representing a playing card where the last character represents suit
//reults: returns a string representing suit of the card in lowercase
//examples: defineSuit('3♣'); // Returns 'clubs'
//pseudo: define playing cards with key (suit symbols) value (suit names) pairs
// extract symbol from playing card using slice and targeting the last character (assuming that the suit symbol is the last character)
//return the corresponding suit name from the suits object using the extracted suit symbol as the key.

function defineSuit(card) {
  const suits = {
    "♣": "clubs",
    "♦": "diamonds",
    "♥": "hearts",
    "♠": "spades",
  };

  const suitSymbol = card.slice(-1);

  return suits[suitSymbol];
}

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

function defineSuit(card) {
  const s = {
    "♣": "clubs",
    "♠": "spades",
    "♦": "diamonds",
    "♥": "hearts",
  };
  return s[card.charAt(card.length - 1)];
}
