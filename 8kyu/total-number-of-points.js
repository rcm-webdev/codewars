//Name: Total Number of Points
//Difficulty: 8kyu
//Tags: Fundamentals, Array

//-------------------------------------------------------------------------------------------------------------------------

// Description

// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

//     if x > y: 3 points (win)
//     if x < y: 0 points (loss)
//     if x = y: 1 point (tie)

// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

//     our team always plays 10 matches in the championship
//     0 <= x <= 4
//     0 <= y <= 4


//-------------------------------------------------------------------------------------------------------------------------

//My Solution

function points(games) {
    let totalPoints = 0; // Initialize a variable to keep track of total points.
  
    for (let i = 0; i < games.length; i++) {
      const [x, y] = games[i].split(":").map(Number);
      // Split each match result string by ":" to separate the scores into 'x' and 'y'.
      // Then, use the map function to convert 'x' and 'y' from strings to numbers.
  
      if (x > y) {
        totalPoints += 3; // If 'x' is greater than 'y', it's a win, so add 3 points.
      } else if (x === y) {
        totalPoints += 1; // If 'x' is equal to 'y', it's a tie, so add 1 point.
      }
      // If 'x' is less than 'y', it's a loss, and we don't need to add any points.
    }
  
    return totalPoints; // Return the total points earned by your team in the championship.
  }

//   Here's a step-by-step explanation of what the code does:

//     The points function takes a single argument, games, which is an array of strings representing the match results.

//     It initializes a variable totalPoints to keep track of the total points your team has earned in the championship. Initially, it's set to 0.

//     The function then enters a for loop, iterating through each match result in the games array.

//     Inside the loop, it splits each match result string (e.g., "3:1") using the split(":") method. This splits the string into two parts based on the ":" character, resulting in an array with two elements: [x, y]. The map(Number) method is used to convert these elements from strings to numbers, ensuring they are treated as numerical values.

//     Next, it checks the outcome of the match using conditional statements:
//         If x (your team's score) is greater than y (opponent's score), it means your team won the match, so 3 points are added to the totalPoints variable.
//         If x is equal to y, it means the match ended in a tie, so 1 point is added to the totalPoints variable.
//         If x is less than y, it means your team lost the match, but no points are added in this case.

//     The loop continues to the next match result, and the process is repeated until all 10 matches are processed.

//     Finally, the function returns the totalPoints, which represents the total number of points your team earned in the championship based on the given rules.

// When you call this points function with your collection of match results, it will calculate and return the total points for your team in the championship.
  


  

//Best Practices

const points=games=>games.reduce((output,current)=>{
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
  },0)

// function points(games) {
//   return games.reduce((output,current)=>{
//     let x = parseInt(current[0]);
//     let y = parseInt(current[2]);
//     let value= x>y ? 3 : x===y ? 1 : 0;
//     return output+value;
//   },0)
// }

// const points = games => ...: This line defines a constant points as an arrow function that takes an array games as its argument.

// games.reduce((output, current) => {...}, 0): It uses the reduce method to iterate over the games array, accumulating the total points earned by your team. The reduce method takes two arguments:
//     A callback function: This callback function is executed for each element in the games array. It receives two parameters: output (the accumulated result) and current (the current element being processed).
//     An initial value: The 0 passed as the second argument is the initial value for the output variable, representing the total points, which starts at 0.

// Inside the callback function:
//     current[0] and current[2] are used to extract the scores of your team (x) and the opponent (y) from the current match result string. current[0] represents your team's score, current[2] represents the opponent's score.
//     The ternary operator current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0 is used to determine the points earned in the current match based on the rules:
//         If your team's score (current[0]) is greater than the opponent's score (current[2]), your team gets 3 points.
//         If the scores are equal, your team gets 1 point.
//         Otherwise (if your team's score is less than the opponent's score), your team gets 0 points.

// The result of the ternary operator is added to the output variable, which accumulates the total points earned by your team.

// The reduce method continues to iterate through each match result in the games array, updating the output variable accordingly.

// Finally, the function returns the output, which represents the total points earned by your team in the championship based on the given rules.

// This code achieves the same result as the previous, more verbose implementation but in a more concise form using the reduce method and ternary operators.

