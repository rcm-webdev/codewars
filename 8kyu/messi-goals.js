//Name: Logical Calculator
//Difficulty: 8kyu
//Tags: Fundamentals, Array

//-------------------------------------------------------------------------------------------------------------------------
//Description

// Messi goals function

// Messi is a soccer player with goals in three leagues:

//     LaLiga
//     Copa del Rey
//     Champions

// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17

//-------------------------------------------------------------------------------------------------------------------------

//My Solution w/ PREP

//parameters: numbers and there will always be a valid input
//results: sum of all numbers
//examples function goals(1,2,3) //6
//pseudocode: turn each value into a number. you could use the reduce method, but I prefer just adding everything and ensure that it is a number.

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return Number(laLigaGoals + copaDelReyGoals + championsLeagueGoals);
}
//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}
