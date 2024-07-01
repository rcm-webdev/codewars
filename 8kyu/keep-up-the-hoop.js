//Name: Keep up the hoop
//Difficulty: 8kyu
//Tags: Fundamentals

//-------------------------------------------------------------------------------------------------------------------------
//Description

// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him.

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message:

//     If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
//     If he doesn't get 10 hoops, return the string "Keep at it until you get it".

//-------------------------------------------------------------------------------------------------------------------------

//My Solution w/ PREP

//parameters: all valid inputs. Each input is a number
//results: a string based on the number placed
//example: function hoopCount(25) //'Great, now move on to tricks'
//pseudocode

function hoopCount(n) {
  //conditional
  //if alex logs 10 or more times the hoop goes round, then return "Great, now move on to tricks"
  //otherwise return message 'Keep at it until you get it'
  return n >= 10
    ? "Great, now move on to tricks"
    : "Keep at it until you get it";
}

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

//same as above
