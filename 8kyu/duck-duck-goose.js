//Name: Duck Duck Goose
//Difficulty: 8kyu
//Tags: Fundamentals, Arrays

//-------------------------------------------------------------------------------------------------------------------------
// Description

// The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

// Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

// Example:

// duck_duck_goose([a, b, c, d], 1) should return a.name
// duck_duck_goose([a, b, c, d], 5) should return a.name
// duck_duck_goose([a, b, c, d], 4) should return d.name

// // PHP only
// duck_duck_goose([$a, $b, $c, $d], 1); // => $a["name"]
// duck_duck_goose([$a, $b, $c, $d], 5); // => $a["name"]
// duck_duck_goose([$a, $b, $c, $d], 4); // => $d["name"]

//-------------------------------------------------------------------------------------------------------------------------

//My Solution

function duckDuckGoose(players, goose) {
  // Use modulo to cycle through the array until the goose is chosen.
  const index = (goose - 1) % players.length;

  // Return the name of the chosen player.
  return players[index].name;
}

//   We subtract 1 from the goose value because the index is 0-based in JavaScript arrays.

//   We use the modulo operator % to ensure that the index stays within the bounds of the array length. This allows us to cycle through the array if the goose number exceeds the number of players.

//   Finally, we return the name property of the chosen player, which is accessed using players[index].name.

// Now, you can call the duckDuckGoose function with an array of player objects and a goose number to get the name of the chosen player. For example:

const players = [{ name: "a" }, { name: "b" }, { name: "c" }, { name: "d" }];

console.log(duckDuckGoose(players, 1)); // Output: 'a'
console.log(duckDuckGoose(players, 5)); // Output: 'a'
console.log(duckDuckGoose(players, 4)); // Output: 'd'

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

function duckDuckGoose(players, goose) {
  return players[(goose - 1) % players.length].name;
}

//   function duckDuckGoose(players, goose) { ... }: This is the function definition. It defines a function called duckDuckGoose that takes two parameters:
//   players: An array of player objects. Each player object is expected to have a name property.
//   goose: An integer representing the chosen player (1-based).

// (goose - 1) % players.length: This part of the code calculates the index of the chosen player in the players array:
//   goose - 1: We subtract 1 from the goose value because array indexing in JavaScript is 0-based. This adjustment ensures that we're treating goose as a 1-based index.
//   % players.length: We use the modulo operator % to ensure that the calculated index stays within the bounds of the players array. If goose is larger than the number of players, this allows us to cycle through the array.

// players[(goose - 1) % players.length]: This part retrieves the player object from the players array based on the calculated index. It uses the calculated index as an array index to access the chosen player in the array.

// .name: Finally, we access the name property of the chosen player object. This assumes that each player object in the players array has a name property.

// The purpose of this code is to return the name of the player who is chosen in the game of Duck, Duck, Goose based on the goose parameter. It calculates the appropriate index in the players array, retrieves the player object at that index, and then returns the name property of that player object.

// For example, if you have an array of player objects players and you call duckDuckGoose(players, 1), it will return the name of the first player in the array. If you call duckDuckGoose(players, 5) and there are only three players in the array, it will wrap around and return the name of the first player again.
