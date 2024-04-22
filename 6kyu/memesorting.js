//Name: Memesorting
//Difficulty: 6kyu
//Tags: Fundamentals, Strings

//-------------------------------------------------------------------------------------------------------------------------
//Description

// Roma is programmer and he likes memes about IT,
// Maxim is chemist and he likes memes about chemistry,
// Danik is designer and he likes memes about design,
// and Vlad likes all other memes.

// You will be given a meme (string), and your task is to identify its category, and send it to the right receiver: IT - 'Roma', chemistry - 'Maxim', design - 'Danik', or other - 'Vlad'.

// IT meme has letters b, u, g.
// Chemistry meme has letters b, o, o, m.
// Design meme has letters e, d, i, t, s.

// If there is more than one possible answer, the earliest match (the one that completes first) should be chosen.

// Note: letters are case-insensetive and should come in the order specified above.

//-------------------------------------------------------------------------------------------------------------------------

//My Solution w/ PREP

//parameters: each meme string contains a secret message which will then be assign to an appropriate memester.
//results: each memester will receive a meme based on the assigned message
// memeSorting('This is a bprogrammer who upholds good faith') => Roma becasue it holds the hidden message 'bug'
//'This is a {b}programmer who {u}pholds {g}ood faith'
//pseudo code as follows:

const memesorting = (meme) => {
  const categories = [
    //define categories with an object
    { receiver: "Roma", keyword: "bug" },
    { receiver: "Maxim", keyword: "boom" },
    { receiver: "Danik", keyword: "edits" },
  ];

  let earliestIndex = Infinity; //Initialize variables to store the earliest receiver and its corresponding index.
  let earliestReceiver = "";

  for (const category of categories) {
    //Iterate through each character of the meme string.
    const { receiver, keyword } = category;
    let keywordIndex = 0;

    for (let i = 0; i < meme.length; i++) {
      //For each character, check if it matches the keyword letters for any category
      if (meme[i].toLowerCase() === keyword[keywordIndex]) {
        //If a category is found, and its index is earlier than the current earliest index, update the earliest receiver and index.
        keywordIndex++;
        if (keywordIndex === keyword.length) {
          if (i < earliestIndex) {
            earliestIndex = i;
            earliestReceiver = receiver;
          }
          break;
        }
      }
    }
  }

  return earliestReceiver || "Vlad"; //After iterating through all characters, return the earliest receiver found, or 'Vlad' if no match is found.
};

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

//same as above.
