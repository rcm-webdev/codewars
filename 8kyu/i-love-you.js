//Name: I love you, a little , a lot, passionately ... not at all
//Difficulty: 8kyu
//Tags: Fundamentals, Arrays

//-------------------------------------------------------------------------------------------------------------------------
// Description

// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

//     "I love you"
//     "a little"
//     "a lot"
//     "passionately"
//     "madly"
//     "not at all"

// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

//-------------------------------------------------------------------------------------------------------------------------

//My Solution

function howMuchILoveYou(nbPetals) {
  const phrases = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];

  // Calculate the index of the chosen phrase based on the number of petals.
  const index = (nbPetals - 1) % phrases.length;

  return phrases[index];
}

//   We define an array called phrases that contains the phrases the girls would say for each petal.

//   We calculate the index of the chosen phrase using (nbPetals - 1) % phrases.length. Here's what happens:
//       nbPetals - 1: We subtract 1 from nbPetals to account for the 0-based indexing of arrays. This adjustment ensures that we start with the "I love you" phrase for the first petal.
//       % phrases.length: We use the modulo operator % to ensure that the index stays within the bounds of the phrases array. If nbPetals is larger than the number of phrases, this allows us to cycle through the phrases.

//   Finally, we return the chosen phrase from the phrases array based on the calculated index.

// Now, when you call howMuchILoveYou(7), it will return "I love you" (the first phrase), and if you call howMuchILoveYou(8), it will return "a little" (the second phrase), and so on. The function cycles through the phrases as needed based on the number of petals.

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

//same as above
