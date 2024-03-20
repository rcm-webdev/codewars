//Name: Template Strings
//Difficulty: 8kyu
//Tags: Fundamentals, Strings

//-------------------------------------------------------------------------------------------------------------------------
//Description

// Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
// Task
// Your task is to return the correct string using the Template String Feature.
// Input
// Two Strings, no validation is needed.
// Output
// You must output a string containing the two strings with the word ```' are '```

//-------------------------------------------------------------------------------------------------------------------------

//My Solution w/ PREP

//parameters: strings
//results: concatnate strings
//examples: watches, cool => watches are cool
//pseudo: return template literal

var templateStrings = function (noun, adjective) {
  return `${noun} are ${adjective}`;
};

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

var TempleStrings = function (obj, feature) {
  return `${obj} are ${feature}`;
};
