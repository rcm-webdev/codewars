//Name: Sort Textbooks
//Difficulty: 8kyu
//Tags: Fundamentals, Array

//-------------------------------------------------------------------------------------------------------------------------
//Description

// HELP! Jason can't find his textbook! It is two days before the test date, and Jason's textbooks are all out of order! Help him sort a list (ArrayList in java) full of textbooks by subject, so he can study before the test.

// The sorting should NOT be case sensitive

//-------------------------------------------------------------------------------------------------------------------------

//My Solution w/ PREP

//parameters: 'texbooks' which is an array of strings. Each string represents a test subject which may contain capitalization and symbols
//returns: array sorted alphabetically in a case-insensitve manner. as far as symbols go, they are sorted based on their unicode value
//example: sorter(['History', 'Math', 'Algebra']) //['Algebra', 'History', 'Math']
//pseudocode: as follows

function sorter(textbooks) {
  // Sort the textbooks array with a custom comparator
  return textbooks.sort((a, b) => {
    // Convert both strings to lower case for comparison
    let lowerA = a.toLowerCase();
    let lowerB = b.toLowerCase();

    // Compare the lower-case versions of the strings
    if (lowerA > lowerB) {
      return 1; // If lowerA is greater, sort a after b
    } else if (lowerA < lowerB) {
      return -1; // If lowerA is smaller, sort a before b
    } else {
      return 0; // If they are equal, keep their relative order
    }
  });
}
//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

function sorter(textbooks) {
  return textbooks.sort((a, b) =>
    a.toLowerCase() > b.toLowerCase()
      ? 1
      : a.toLowerCase() < b.toLowerCase()
      ? -1
      : 0
  );
}
