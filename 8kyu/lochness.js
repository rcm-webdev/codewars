//Name: A Strange Trip to the Market
//Difficulty: 8kyu
//Tags: Fundamentals, Strings

//-------------------------------------------------------------------------------------------------------------------------
//Description

// You're on your way to the market when you hear beautiful music coming from a nearby street performer. The notes come together like you wouln't believe as the musician puts together patterns of tunes. As you wonder what kind of algorithm you could use to shift octaves by 8 pitches or something silly like that, it dawns on you that you have been watching the musician for some 10 odd minutes. You ask, "how much do people normally tip for something like this?" The artist looks up. "It's always gonna be about tree fiddy."

// It was then that you realize the musician was a 400 foot tall beast from the paleolithic era! The Loch Ness Monster almost tricked you!

// There are only 2 guaranteed ways to tell if you are speaking to The Loch Ness Monster: A) it is a 400 foot tall beast from the paleolithic era; B) it will ask you for tree fiddy.

// Since Nessie is a master of disguise, the only way accurately tell is to look for the phrase "tree fiddy". Since you are tired of being grifted by this monster, the time has come to code a solution for finding The Loch Ness Monster. Note that the phrase can also be written as "3.50" or "three fifty". Your function should return true if you're talking with The Loch Ness Moster, false otherwise.

//-------------------------------------------------------------------------------------------------------------------------

//My Solution w/ PREP

//parameters: string
//results: if string contains 'tree fiddy' or '3.50' or 'three fifty' return true and you are in fact talking with a the lochness monster
//examples: 'Hello good sir, do you have tree fiddy to spare' ===> true
//psuedo: conditionals: if a string contains one of three phrases mentioned above, return true
function isLockNessMonster(s) {
  const detector = {
    phrases: ["tree fiddy", "3.50", "three fifty"],
  };

  if (detector.phrases.some((phrase) => s.toLowerCase().includes(phrase))) {
    return true;
  } else {
    return false;
  }
}

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

function isLockNessMonster(s) {
  return s.includes("tree fiddy") || s.includes("3.50");
}
