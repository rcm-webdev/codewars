//Name: Correct the mistakes of the character recognition software
//Difficulty: 8kyu
//Tags: Fundamentals, Strings

//-------------------------------------------------------------------------------------------------------------------------
//Description

// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

//     S is misinterpreted as 5
//     O is misinterpreted as 0
//     I is misinterpreted as 1

// The test cases contain numbers only by mistake.

//-------------------------------------------------------------------------------------------------------------------------

//My Solution w/ PREP

//Parameters: always a string
//Returns: S, O , I from 5, 0, 1
//Example: '5hrimp 50up' ==> 'Shrimp Soup'
//Pseudo code: use replace all method for each instance.

function correct(string) {
  return string.replaceAll("0", "O").replaceAll("1", "I").replaceAll("5", "S");
}

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

function correct(string) {
  return [...string].map((a) => ({ 0: "O", 5: "S", 1: "I" }[a] || a)).join("");
}
