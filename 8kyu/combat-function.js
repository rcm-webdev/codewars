//Name: Combat Function
//Difficulty: 8kyu
//Tags: Fundamentals

//-------------------------------------------------------------------------------------------------------------------------
//Description

// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

//-------------------------------------------------------------------------------------------------------------------------

//My Solution w/ PREP

//parameters: numbers, each input is valid and will always be a number (no strings)
//results: input health and then current damage (which i am assuming that it is subtracted from health), health can never be below 0
//example: function combat(100, 50) // 50
//pseudocode

function combat(health, damage) {
  let currentHealth = health - damage;
  return currentHealth >= 0 ? currentHealth : 0;
}

//using a method
function combat(health, damage) {
  return Math.max(0, health - damage);
}

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

function combat(health, damage) {
  return health < damage ? 0 : health - damage;
}
